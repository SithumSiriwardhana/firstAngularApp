import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  onSubmit() { }

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
    createdDate: ['', Validators.required],
    manufactureName: ['', Validators.required],
    daysForDeliver: [
      '',
      [Validators.required, Validators.min(1), Validators.max(10)],
    ],
  });

  get f() {
    return this.productForm.controls;
  }
}
