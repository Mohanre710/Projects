import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLeftComponent } from './checkout-left.component';

describe('CheckoutLeftComponent', () => {
  let component: CheckoutLeftComponent;
  let fixture: ComponentFixture<CheckoutLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
