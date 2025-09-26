import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Proyects } from './components/proyects/proyects';
import { Technologies } from './components/technologies/technologies';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Proyects, Technologies, Skills, Certificates, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'portfolio';
}
