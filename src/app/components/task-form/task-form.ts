import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  tareaPrueba: string = 'Tarea de prueba';
  nuevaTarea: string = '';
  descripcionImagen: string = 'Imagen representativa de tareas';

  AddTask(): void {
    console.log('Esta es la nueva tarea agregada:', this.nuevaTarea);
    this.nuevaTarea = "";

  }
}

