import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { UserboxComponent } from './app/components/userbox/userbox.component';
import { RecetteComponent } from './app/components/recette/recette.component';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';


//bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(UserboxComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(RecetteComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));
