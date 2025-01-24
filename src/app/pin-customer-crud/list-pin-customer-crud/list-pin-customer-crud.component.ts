import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pin-customer-crud',
  templateUrl: './list-pin-customer-crud.component.html',
  styleUrls: ['./list-pin-customer-crud.component.css'],
})
export class ListPinCustomerCrudComponent implements OnInit {
  public listPinData = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    // fetch pin data from local storage
    this.listPinData = JSON.parse(localStorage.getItem('pinArr'));
  }
  navigateToAddCustomer() {
    this.router.navigate(['/create-customer']);
  }
  navigateToAddPin() {
    this.router.navigate(['/create-pin']);
  }
}
