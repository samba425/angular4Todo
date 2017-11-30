import { FetchService } from './fetch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate } from '@angular/router'; 
import { AppComponent } from './app.component';  
import { OnewComponent } from './onew/onew.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoComponent } from './two/two.component';
import { HomeComponent } from './home/home.component';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OnewComponent,
    NavbarComponent,
    TwoComponent,
    HomeComponent,
    SqrtPipe 
  ],
  imports: [
     BrowserModule,
     HttpModule,
     FormsModule,
      RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'one',component: OnewComponent},
      { path:'two',component: TwoComponent},
    ])
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
