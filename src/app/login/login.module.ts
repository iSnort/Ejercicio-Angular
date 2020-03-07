import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MDBBootstrapModule } from "angular-bootstrap-md";

//componente
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  exports: [SigninComponent, SignupComponent],

  imports: [CommonModule, FormsModule, MDBBootstrapModule]
})
export class LoginModule {}
