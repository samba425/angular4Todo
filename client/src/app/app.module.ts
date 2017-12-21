import { FetchService } from './fetch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate } from '@angular/router'; 
import { AppComponent } from './app.component';  
import { OnewComponent } from './onew/onew.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { HomeComponent } from './home/home.component';
import { SqrtPipe } from './sqrt.pipe';  
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
// import {MatButtonModule, MatCheckboxModule,MatMenuModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    OnewComponent,
    NavbarComponent,
    TwoComponent,
    HomeComponent,
    SqrtPipe,
    ThreeComponent 
  ],
  imports: [
     BrowserModule,
     HttpModule,
     FormsModule,
    //  BrowserAnimationsModule,
    //  MatCheckboxModule,
    //  MatCheckboxModule,
    //   MatMenuModule,
    //   MatSidenavModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'one',component: OnewComponent},
      { path:'two',component: TwoComponent},
      { path:'three',component: ThreeComponent},
    ])
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
