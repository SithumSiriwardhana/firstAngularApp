import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
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

  public products = [
    {
      'productId': "001",
      'productName': "White Basmathi Rice",
      'createdDate': "Jan 29, 2023",
      'unitPrice': "Rs. 400",
      'quantity': 100,
      'productDescription': "White Basmathi Rice imported from pakistan"
    },
    {
      'productId': "002",
      'productName': "Flour",
      'createdDate': "Jan 28, 2023",
      'unitPrice': "Rs. 200",
      'quantity': 50,
      'productDescription': "Super fine Whole grain general Purpose flour"
    },
    {
      'productId': "003",
      'productName': "Sugar",
      'createdDate': "Jan 5, 2023",
      'unitPrice': "Rs. 300",
      'quantity': 80,
      'productDescription': "White sugar manufactured by Palwatte Factory"
    },
    {
      'productId': "004",
      'productName': "Dhal",
      'createdDate': "Jan 26, 2023",
      'unitPrice': "Rs. 250",
      'quantity': 20,
      'productDescription': "Imported mysoor dhal from India"
    }
  ]


}
