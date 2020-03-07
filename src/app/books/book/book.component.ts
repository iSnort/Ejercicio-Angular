import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title: string = "Loading..."
  description: string = "Loading..."
  Books: any[] = [{
    title: "Test",
    description: "Libro pruebas"
  }];

  async ngOnInit(): Promise<void> {
    const answer = await Axios.get('https://103f126b.ngrok.io/books');
    this.Books.push(answer);
  }
}
