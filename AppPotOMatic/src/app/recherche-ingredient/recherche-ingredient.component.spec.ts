import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheIngredientComponent } from './recherche-ingredient.component';

describe('RechercheIngredientsComponent', () => {
  let component: RechercheIngredientComponent;
  let fixture: ComponentFixture<RechercheIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheIngredientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
