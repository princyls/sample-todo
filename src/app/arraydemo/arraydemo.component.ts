import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arraydemo',
  templateUrl: './arraydemo.component.html',
  styleUrls: ['./arraydemo.component.css']
})
export class ArraydemoComponent implements OnInit {
 myArray:any [];

  
  regForm=new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email:new FormControl('')
  })


  
  constructor() { }

  ngOnInit(): void {
    // this.myArray.push(this.princyArray);
    // console.log(this.myArray)
  }
  
  onFormSubmit(){
    console.log(this.regForm.get('firstName'));
    console.log(this.regForm.get('lastName').value);

   var princyArray = {
      firstName:this.regForm.get('firstName'),
      lastName:this.regForm.get('lastName'),
      email:this.regForm.get('email')
     };
     this.myArray.push(princyArray);
     console.log(this.myArray)

  }
}
