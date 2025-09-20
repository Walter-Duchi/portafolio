import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { TasksPage } from "./components/tasks-page/tasks-page";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, TasksPage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: 0 //evitar comprobaciones innecesarias
})
export class App {
  protected readonly title = signal('portafolio');
}
