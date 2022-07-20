import { Component, OnInit } from '@angular/core';
// เรียกใช้งาน FormBuilder และ FormGroup
import { FormGroup, FormBuilder } from '@angular/forms';
/*
FormGroup import มาเพื่อเก็บข้อมูลของฟอร์มในรูปแบบกลุ่ม
FormBuilder import มาเพื่อที่จะใช้งาน Group เพื่อจะgroupข้อมูลภายในฟอร์ม
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // สร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็นรูปแบบ FormGroup

   title = 'test';
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  ngOnInit() {}
}
