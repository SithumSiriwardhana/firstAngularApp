import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  errorMessage: string | undefined;
  constructor(private productService: ProductService) { }
  
  // public firstProductItemName = "White Basmathi Rice";

  // public getPriceofRice() {
  //   return 350;
  // }

  // public isLowInventory = false;
  // // public dhalStorage = 10;

  // public getDhalStorage() {
  //   if (this.products.quantity < 50)
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

  public products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  isLoading: boolean = false;

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe(
      (res) => {
        console.log(res);
        const productsArray = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            productsArray.push(res[key]);
            console.log(productsArray)
          }
        }
        this.products = productsArray;
        //console.log(this.products);
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
        this.errorMessage = 'Error fetching products';
      }
    );
  }

  refresh() {
    this.getProducts();
  }

  // getProduct() {
  //   this.productService.getProducts().subscribe((res) => {
  //     this.products = res.data;
  //   });
  // }
  // public products = [
  //   {
  //     productId: '001',
  //     productName: 'White Basmathi Rice',
  //     createdDate: '2023.1.1',
  //     unitPrice: '400',
  //     quantity: 100,
  //     productDescription: 'White Basmathi Rice imported from pakistan',
  //   },
  //   {
  //     productId: '002',
  //     productName: 'Flour',
  //     createdDate: 'Jan 28, 2023',
  //     unitPrice: '20',
  //     quantity: 50,
  //     productDescription: 'Super fine Whole grain general Purpose flour',
  //   },
  //   {
  //     productId: '003',
  //     productName: 'Sugar',
  //     createdDate: 'Jan 5, 2023',
  //     unitPrice: '300',
  //     quantity: 80,
  //     productDescription: 'White sugar manufactured by Palwatte Factory',
  //   },
  //   {
  //     productId: '004',
  //     productName: 'Dhal',
  //     createdDate: 'Jan 26, 2023',
  //     unitPrice: '250',
  //     quantity: 20,
  //     productDescription: 'Imported mysoor dhal from India',
  //   },
  // ];

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
