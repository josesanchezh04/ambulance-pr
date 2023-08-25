import { Component } from '@angular/core';
import { SendData, TaskType } from './types/task.type';
import { TaskService } from './services/task.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:TaskType[] = [];
  constructor(taskService : TaskService) {
    this.tasks = taskService.tasks;
  }
  // tasks:TaskType[] = [
  //   {
  //       title:'Modificar componente login ',
  //       responsable: 'Jose',
  //       points: 5,
  //       startDate: new Date(2023,5,1)
  //   },
  //   {
  //       title:'Modificar codigo QR  ',
  //       responsable: 'Maria',
  //       points: 2,
  //       startDate: new Date(2023,5,2)
  //   },
  //   {
  //       title:'Crear grafico',
  //       responsable: 'Atenas',
  //       points: 3,
  //       startDate: new Date(2023,5,3)
  //   }
  // ]

  addTask(task:SendData){
    this.tasks.push(task);
  }
}
