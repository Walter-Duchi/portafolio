import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Technologies } from './components/technologies/technologies';
import { Proyects } from './components/proyects/proyects';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Technologies, Proyects, Skills, Certificates, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //evitar comprobaciones innecesarias
})
export class App {
  protected readonly title = signal('portafolio');
}
