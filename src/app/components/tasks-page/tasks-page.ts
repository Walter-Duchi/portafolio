import { Component } from '@angular/core';
import { TaskForm } from "../task-form/task-form";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-page',
  imports: [TaskForm, FormsModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css'
})
export class TasksPage {
  tasks: Task[] = [];

  taskName: string = '';

  addTask(taskName: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      name: taskName,
      completed: false
    };
    this.tasks.push(newTask);
    this.taskName = '';
  }
}

export interface Task {
  id: number;
  name: string;
  completed: boolean;
} 