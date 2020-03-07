import { HomeComponent } from './home/home.component';
import { BookviewComponent } from './bookview/bookview.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BookComponent } from './../books/book/book.component';
import { SharedModule } from './../shared/shared.module';
import { LoginModule } from './../login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BookComponent, ProfilepageComponent, BookviewComponent, HomeComponent],
  imports: [
    CommonModule,
    LoginModule,
    SharedModule,
    BookComponent,
    MDBBootstrapModule
  ]
})
export class PagesModule { }
