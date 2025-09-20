import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { TasksPage } from './components/tasks-page/tasks-page';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, TasksPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush //evitar comprobaciones innecesarias
})
export class App {
  protected readonly title = signal('portafolio');
}
