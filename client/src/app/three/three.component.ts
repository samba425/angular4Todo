import { Component, OnInit } from '@angular/core';
import { FetchService } from './../fetch.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  constructor(private fetchApi : FetchService) {  
  }

  ngOnInit() {
  }

userName;
gituser;
uniqueUser;
getUser(user) {
  console.log("user one",user)
   this.uniqueUser = user;
}
  search(){
    console.log(this.userName);
    if(this.userName.length >= 3) {
      this.fetchApi.getGitUser(this.userName)
      .subscribe( (res) => {
          console.log("git api fetch data",res.items);
          this.gituser = res.items;
      })

    }
     
  }
}
