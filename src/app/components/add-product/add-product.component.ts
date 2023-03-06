import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  // ngOnInit(): void{
  //   this.productFrom.controls['daysForDeliver'].setValue(null);
  // }

  // ngDoCheck(): void {
  //   console.log("Triggered ngDoCheck");
  // }

  // ngAfterContentInit(): void {
  //   console.log("Triggered ngAfterContentInit");
  // }

  // ngAfterViewInit(): void {
  //   console.log("Triggered ngAfterViewInit");
  // }

  // ngAfterViewCheck(): void {
  //   console.log("Triggered ngAfterViewCheck");
  // }

  // ngOnDestroy(): void {
  //   alert("ngDestroy Called");
  //   console.log("Triggered ngDestroy");
  // }
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  isDataUploading = false;

  onSubmit() {
    const values = this.productForm.value as unknown as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      debugger;
      this.isDataUploading = false;
      this.productForm.reset();
    });
  }

  productForm = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
    // manufactureName: ['', Validators.required],
    // daysForDeliver: [
    //   '',
    //   [Validators.required, Validators.min(1), Validators.max(10)],
    // ],
  });

  get f() {
    return this.productForm.controls;
  }
}
