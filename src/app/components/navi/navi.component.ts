import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  redirectToHome(): void {
    this.document.location.href = 'https://brave-meadow-0910b9510.3.azurestaticapps.net/';
  }

  redirectToManufacture(): void {
    this.document.location.href = 'https://brave-meadow-0910b9510.3.azurestaticapps.net/manufactures';
  }

  redirectToAddProduct(): void {
    this.document.location.href = 'https://brave-meadow-0910b9510.3.azurestaticapps.net/products/add';
  }

  redirectToGetOrders(): void {
    this.document.location.href = 'http://localhost:4200/orders/';
  }

  redirectToGetDepartments(): void {
    this.document.location.href = 'http://localhost:4200/departments/';
  }

  redirectToGetSubpieces(): void {
    this.document.location.href = 'http://localhost:4200/subpieces/';
  }
}
