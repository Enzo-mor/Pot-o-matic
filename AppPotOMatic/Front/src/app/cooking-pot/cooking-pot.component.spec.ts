import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingPotComponent } from './cooking-pot.component';

describe('CookingPotComponent', () => {
  let component: CookingPotComponent;
  let fixture: ComponentFixture<CookingPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingPotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
