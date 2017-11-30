import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit { 
  fetchdata;
  myArray;
  name;
  email;
  showbutton = false;
  key;
  constructor(private date: FetchService) { }

  ngOnInit() { 
    this.myArray = JSON.parse(localStorage.getItem('myarray')); 
  }

  createForm(res) {
    if (!res.value.name && !res.value.email) {
      alert("fill input fields")
    } else {
      this.myArray = JSON.parse(localStorage.getItem('myarray'));
      var index = this.myArray.findIndex(x => x.name == res.value.name);
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
}