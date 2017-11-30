import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchService {

  constructor(private http: Http) { }


  presentDate() {  
  }

  fetchdata() { 
    // return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5431afb2cddf4336909219ed0a4bf36c")
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=5431afb2cddf4336909219ed0a4bf36c")
      .map((data) => {
        console.log("htpp........",data.json())
        return data.json()
      })
  }
}
