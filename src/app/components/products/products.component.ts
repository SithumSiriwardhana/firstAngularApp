import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // public firstProductItemName = "White Basmathi Rice";

  // public getPriceofRice() {
  //   return 350;
  // }

  // public isLowInventory = false;
  // public dhalStorage = 10;

  // public getDhalStorage() {
  //   if (this.dhalStorage < 50)
  //     this.isLowInventory = true;
  //   return this.dhalStorage
  // }

  public showAddProduct: boolean = false;

  public showAddProducts() {
    this.showAddProduct = true;
  }

  public hideAddProducts() {
    this.showAddProduct = false;
  }

  public products = [
    {
      productId: '001',
      productName: 'White Basmathi Rice',
      createdDate: '2023.1.1',
      unitPrice: '400',
      quantity: 100,
      productDescription: 'White Basmathi Rice imported from pakistan',
    },
    {
      productId: '002',
      productName: 'Flour',
      createdDate: 'Jan 28, 2023',
      unitPrice: '20',
      quantity: 50,
      productDescription: 'Super fine Whole grain general Purpose flour',
    },
    {
      productId: '003',
      productName: 'Sugar',
      createdDate: 'Jan 5, 2023',
      unitPrice: '300',
      quantity: 80,
      productDescription: 'White sugar manufactured by Palwatte Factory',
    },
    {
      productId: '004',
      productName: 'Dhal',
      createdDate: 'Jan 26, 2023',
      unitPrice: '250',
      quantity: 20,
      productDescription: 'Imported mysoor dhal from India',
    },
  ];

  public rowIndex: number = -1;
  public isRowSelected: boolean = false;

  public selectProduct(selectedRow: number) {
    if (
      this.isRowSelected &&
      this.rowIndex == selectedRow &&
      this.clickingButton == true
    ) {
      this.isRowSelected = true;
      this.rowIndex = selectedRow;
    } else if (this.isRowSelected && this.rowIndex == selectedRow) {
      this.isRowSelected = false;
      this.rowIndex = -1;
    } else {
      this.isRowSelected = true;
      this.rowIndex = selectedRow;
    }
    this.clickingButton = false;
  }

  public clickingButton: boolean = false;

  public buttonClick() {
    return (this.clickingButton = true);
  }
}
