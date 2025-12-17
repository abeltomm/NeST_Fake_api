import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  collegename = 'Amal Jyothi';
  person ={
    name: 'Abel Thomas',
    email: 'abelthomas1000@gmail.com',
    contactno: '9496347930'
  }



  protected readonly title = signal('Project');
}
