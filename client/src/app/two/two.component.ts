import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit { 
  fetchdata;
  myArray = [];
  myArrayModel = [];
  name;
  email;
  firstName;
  lastName;
  showbutton = false;
  showModelButton = false;
  key;
  keyForm;
  modelForms;

  constructor(private date: FetchService) { }

  ngOnInit() { 
    this.modelForms = new FormGroup({
      firstName: new FormControl( ),
      lastName: new FormControl( )
    });

    if(localStorage.getItem('myarray')) {
      this.myArray = JSON.parse(localStorage.getItem('myarray')); 
    }  else {
      this.myArray = [];
    }

       if(localStorage.getItem('myarrayModel')) {
    this.myArrayModel = JSON.parse(localStorage.getItem('myarrayModel')); 
    }  else {
      this.myArray = [];
    } 
  }

  createForm(res) {
       if (!res.value.name && !res.value.email) {
      alert("fill input fields")
    } else {  
      console.log("myarray..",this.myArray)
      if(this.myArray === null ){
        this.myArray.push(res.value);
        localStorage.setItem('myarray', JSON.stringify(this.myArray)); 
        
      } else {
        if(this.myArray.length > 0 ) {
          var index = this.myArray.findIndex(x => x.name == res.value.name); 
        } else {
          index = -1;
        }
        if (index === -1) {
          this.myArray.push(res.value);
          res.reset();
          localStorage.setItem('myarray', JSON.stringify(this.myArray));
        } else {
          alert("already exits");
          res.reset();
        }
      } 
      }
  }
  cancel(){ 
    this.showbutton = false;
    this.name = '';
    this.email = ''; 
  }
  edit(res) {
    this.key = this.myArray.indexOf(res);
    this.name = res.name;
    this.email = res.email;
    this.showbutton = true;
  }
  update(f) {
    this.myArray.splice(this.key, 1, f.value);
    localStorage.setItem('myarray', JSON.stringify(this.myArray));
    this.name = '';
    this.email = '';
    this.showbutton = false;
  }

  remove(data) {
    for (var i = 0; i < this.myArray.length; i++) {
      if (this.myArray[i].name === data.name) {
        let findIndex = this.myArray.indexOf(this.myArray[i]);
        this.myArray.splice(findIndex, 1);
        localStorage.setItem('myarray', JSON.stringify(this.myArray));
      }
    }
  }

//model template form

  modelform(res) {    
     if (!res.value.firstName && !res.value.lastName) {
      alert("fill input fields")
    } else {   
      if(this.myArrayModel === null ){
        this.myArrayModel.push(res.value);
        localStorage.setItem('myarrayModel', JSON.stringify(this.myArrayModel)); 
        
      } else {
        if(this.myArrayModel.length > 0 ) {
          var index = this.myArrayModel.findIndex(x => x.firstName == res.value.firstName); 
        } else {
          index = -1;
        }
        if (index === -1) {
          this.myArrayModel.push(res.value);
          res.reset();
          localStorage.setItem('myarrayModel', JSON.stringify(this.myArrayModel));
        } else {
          alert("already exits");
          res.reset();
        }
      } 
      }
}
 

   modelFormCancel(){ 
    this.showbutton = false;
    this.firstName = '';
    this.lastName = ''; 
  }
  modelFormEdit(res) {
    console.log("model form edit",res)
    this.keyForm = this.myArrayModel.indexOf(res);
    this.firstName = res.firstName;
    this.lastName = res.lastName;
    this.showModelButton = true;
  }
  modelFormUpdate(f) {
    
    this.myArrayModel.splice(this.keyForm, 1, f.value);
    localStorage.setItem('myarrayModel', JSON.stringify(this.myArrayModel));
    this.firstName = '';
    this.lastName = '';
    this.showModelButton = false;
  }

  modelFormRemove(data) {
    for (var i = 0; i < this.myArrayModel.length; i++) {
      if (this.myArrayModel[i].firstName === data.firstName) {
        let findIndex = this.myArrayModel.indexOf(this.myArrayModel[i]);
        this.myArrayModel.splice(findIndex, 1);
        localStorage.setItem('myarrayModel', JSON.stringify(this.myArrayModel));
      }
    }
  }


}
