import { Component, OnInit } from '@angular/core';
// เรียกใช้งาน FormBuilder และ FormGroup
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
/*
FormGroup import มาเพื่อเก็บข้อมูลของฟอร์มในรูปแบบกลุ่ม
FormBuilder import มาเพื่อที่จะใช้งาน Group เพื่อจะgroupข้อมูลภายในฟอร์ม
*/
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // สร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็นรูปแบบ FormGroup
     title = 'test';
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
  ngOnInit() {

  }

  // createAddress(): FormGroup {
  //   return this.fb.group({
  //     address: '',
  //     street: '',
  //     city: '',
  //     country: ''
  //   });
  // }

}

