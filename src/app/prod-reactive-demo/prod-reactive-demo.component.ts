import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { ProductdataService } from '../productdisplay/productdata.service';
import { Product } from '../productdisplay/product';
@Component({
  selector: 'app-prod-reactive-demo',
  templateUrl: './prod-reactive-demo.component.html',
  styleUrls: ['./prod-reactive-demo.component.css']
})
export class ProdReactiveDemoComponent implements OnInit {

  proapp: FormGroup;
  // debouncer: any;
  constructor(private fb: FormBuilder, private _data: ProductdataService) {}

  ngOnInit() {
    this.proapp = this.fb.group({
      pro_id: new FormControl(null),
      pro_name: new FormControl(null),
      pro_price:new FormControl(null),
      pro_desc:new FormControl(null),
      pro_qty:new FormControl(null),
      pro_mfg:new FormControl(null),
      pro_img:new FormControl(null)
    });
  }
  onProductSave() {
    this._data
      .addProduct(
        new Product(
          this.proapp.value.pro_id,
          this.proapp.value.pro_name,
          this.proapp.value.pro_price,
          this.proapp.value.pro_desc,
          this.proapp.value.pro_qty,
          this.proapp.value.pro_mfg,
          this.proapp.value.pro_img
        )
      )
      .subscribe((x: any) => {
        alert("record added");
      });
  }
}
