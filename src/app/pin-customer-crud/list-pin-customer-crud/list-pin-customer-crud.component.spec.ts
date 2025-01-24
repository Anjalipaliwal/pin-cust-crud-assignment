import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPinCustomerCrudComponent } from './list-pin-customer-crud.component';

describe('ListPinCustomerCrudComponent', () => {
  let component: ListPinCustomerCrudComponent;
  let fixture: ComponentFixture<ListPinCustomerCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPinCustomerCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPinCustomerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
