import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTest1 } from './material-test1';

describe('MaterialTest1', () => {
  let component: MaterialTest1;
  let fixture: ComponentFixture<MaterialTest1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTest1],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialTest1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
