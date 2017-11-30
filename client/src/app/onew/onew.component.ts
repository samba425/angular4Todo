import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'app-onew',
  templateUrl: './onew.component.html',
  styleUrls: ['./onew.component.css']
})
export class OnewComponent implements OnInit {
fetchNews;
  constructor(private news: FetchService) { } 
  isavailable = false;
  ngOnInit() { 
    this.news.fetchdata()
    .subscribe(res => {
      console.log(res.articles);
      this.fetchNews =  res.articles;
    })
  }

}
