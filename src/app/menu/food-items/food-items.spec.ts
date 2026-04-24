import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItems } from './food-items';

describe('FoodItems', () => {
  let component: FoodItems;
  let fixture: ComponentFixture<FoodItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodItems],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
