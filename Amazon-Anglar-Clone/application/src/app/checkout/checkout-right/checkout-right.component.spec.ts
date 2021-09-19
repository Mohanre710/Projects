import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRightComponent } from './checkout-right.component';

describe('CheckoutRightComponent', () => {
  let component: CheckoutRightComponent;
  let fixture: ComponentFixture<CheckoutRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
