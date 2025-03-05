import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionIngredientsComponent } from './selection-ingredients.component';

describe('SelectionIngredientsComponent', () => {
  let component: SelectionIngredientsComponent;
  let fixture: ComponentFixture<SelectionIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionIngredientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
