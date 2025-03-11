import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteBoxComponent } from './recette-box.component';

describe('RecetteBoxComponent', () => {
  let component: RecetteBoxComponent;
  let fixture: ComponentFixture<RecetteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
