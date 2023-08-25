import { Component, EventEmitter, Output } from '@angular/core';
import { SendData } from '../../types/task.type';

@Component({
  selector: 'amb-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  sendData : SendData;
  @Output() onAddTask : EventEmitter<SendData> = new EventEmitter<SendData>(); 
  constructor(){
    this.sendData = {
      title: "",
      responsable:'',
      points:0,
      startDate: new Date(),
    };
  }
  save(){
    this.onAddTask.emit(this.sendData);
  }
  handleTask(e:any){
    this.sendData.title = e.target.value;
  }
  handleResponsable(e:any){
    this.sendData.responsable = e.target.value;
  }
  handleDays(e:any){
    this.sendData.points = e.target.value;
  }
  handleStartDate(e:any){
    this.sendData.startDate = new Date(e.target.value);
  }
}
