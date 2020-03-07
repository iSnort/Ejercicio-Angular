import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  email: string;
  password: number;
  regex: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  async onClick(event: Event): Promise<void> {
    event.preventDefault();
    const testEmail: boolean = this.regex.test(this.email);
    //Inicio de sesion
    if (testEmail && this.email) 
    {
      const test = await axios.post('https://103f126b.ngrok.io/user',{
        user_email: this.email,
        password: this.password
      });
      console.log(test);
    } else {
      console.log('El email ingresado es erróneo')
    }
  }
}
