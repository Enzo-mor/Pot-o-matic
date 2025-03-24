require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3080

// Configuration de CORS
app.use(cors({
  origin: '*', // Permet l'accès depuis n'importe quelle origine
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())

let accessToken = '';

// Fonction pour récupérer le token d'accès OAuth2
async function getAccessToken() {
  const credentials = `${process.env.FATSECRET_CLIENT_ID}:${process.env.FATSECRET_CLIENT_SECRET}`
  const encodedCredentials = Buffer.from(credentials).toString('base64')

  try {
    const response = await axios.post(
      'https://oauth.fatsecret.com/connect/token',
      'grant_type=client_credentials&scope=basic',
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    accessToken = response.data.access_token
    console.log('Token récupéré:', accessToken)
  } catch (error) {
    console.error(
      'Erreur lors de la récupération du token:',
      error.response?.data || error.message
    )
  }
}

// Route pour récupérer les aliments depuis FatSecret
app.get('/api/ingredients', async (req, res) => {
  try {
    if (!accessToken) {
      await getAccessToken() // Obtenir le token si absent
    }

    const query = req.query.q // Rechercher un aliment (ex: "apple") à récupérer sur le front
    const response = await axios.get(
      'https://platform.fatsecret.com/rest/server.api',
      {
        params: {
          method: 'foods.search',
          format: 'json',
          search_expression: query,
          include_food_images: '1',
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message })
  }
})

// Route pour récupérer les recettes depuis FatSecret
app.get('/api/recipes', async (req, res) => {
  try {
    if (!accessToken) {
      await getAccessToken() // Obtenir le token si absent
    }

    const query = req.query.q; // Recherche de recettes avec l'ingrédient
    const response = await axios.get(
      'https://platform.fatsecret.com/rest/server.api',
      {
        params: {
          method: 'recipes.search',
          format: 'json',
          search_expression: query,
          include_food_images: '1',
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    res.json(response.data); // Retourner les recettes sous forme de JSON
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
})

// Route pour récupérer les détails d'une recette par son ID
app.get('/api/recipes/:recipeId', async (req, res) => {
  try {
    if (!accessToken) {
      await getAccessToken(); // Obtenir le token si absent
    }

    const recipeId = req.params.recipeId; // Récupérer l'ID de la recette depuis les paramètres de l'URL
    const response = await axios.get('https://platform.fatsecret.com/rest/server.api', {
      params: {
        method: 'recipe.get',
        recipe_id: recipeId, // Passer l'ID de la recette
        format: 'json',
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.json(response.data); // Retourner les détails de la recette sous forme de JSON
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// Route pour rechercher une ville avec Nominatim
app.get('/api/search-city', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'Le paramètre "city" est requis' });
  }

  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
      params: {
        q: city,
        format: 'json',
        limit: 1
      }
    });

    if (response.data.length === 0) {
      return res.status(404).json({ error: 'Ville non trouvée' });
    }

    const location = response.data[0]; // On prend le premier résultat
    res.json({ lat: location.lat, lon: location.lon });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la requête Nominatim' });
  }
});

// Route pour récupérer les supermarchés via Overpass API
app.get('/api/supermarkets', async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res.status(400).json({ error: 'Les paramètres "lat" et "lon" sont requis' });
  }

  const query = `
    [out:json];
    node["shop"="supermarket"](around:5000, ${lat}, ${lon});
    out body;
  `;

  try {
    const response = await axios.get('https://overpass-api.de/api/interpreter', {
      params: { data: query },
    });

    const supermarkets = response.data.elements.map((element) => ({
      lat: element.lat,
      lon: element.lon,
      tags: element.tags,
    }));

    res.json(supermarkets);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la requête Overpass' });
  }
});





// Lancer le serveur
app.listen(PORT, async () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
  await getAccessToken() // Récupérer un token au démarrage
})
