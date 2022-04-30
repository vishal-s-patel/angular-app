import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPermutationComponent } from './array-permutation.component';

describe('ArrayPermutationComponent', () => {
  let component: ArrayPermutationComponent;
  let fixture: ComponentFixture<ArrayPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayPermutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
