import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})

export class SigninComponent{
  email: string;
  password: string;
  regex: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


  async onClick(event: Event): Promise<void> {
    event.preventDefault();
    const testEmail: boolean = this.regex.test(this.email);
    //Inicio de sesion
    if (testEmail && this.email) 
    {
      const test = await axios.post('https://103f126b.ngrok.io/user/login',{
        user_email: this.email,
        password: this.password
      });
      console.log(test);
    } else {
      console.log('El email ingresado es erróneo')
    }
  }
}
