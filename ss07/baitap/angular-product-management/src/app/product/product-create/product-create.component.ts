import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import validate = WebAssembly.validate;
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm : FormGroup = new FormGroup({
    id : new FormControl('',[Validators.required]),
    name : new FormControl(),
    price : new FormControl(),
    description  : new FormControl(),
  });
  constructor(private productService:ProductService,
             private router:Router) { }
  submit(){
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
    this.router.navigateByUrl("product/list");
  }

  ngOnInit(): void {

  }
}
