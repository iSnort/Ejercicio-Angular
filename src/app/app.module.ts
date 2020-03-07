import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MDBBootstrapModule } from "angular-bootstrap-md";

//importar modulos
import { LoginModule } from "./login/login.module";

//ngx bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BookComponent } from './books/book/book.component';
import { BookpageComponent } from './pages/bookpage/bookpage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { BookviewComponent } from './pages/bookview/bookview.component';
import { HomeComponent } from './pages/home/home.component';
import { BookRegistryComponent } from './books/book-registry/book-registry.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BookComponent, BookpageComponent, ProfilepageComponent, BookviewComponent, HomeComponent, BookRegistryComponent, SharedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
