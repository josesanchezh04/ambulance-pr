import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { SendData, TaskType } from "../../types/task.type";
@Component({
    selector: 'amb-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnChanges{
    @Input() tasks?:SendData[];
    

    ngOnChanges(changes: SimpleChanges): void {
        if(changes["taskAdd"]?.currentValue && !changes["taskAdd"]?.firstChange){
            // this.tasks.push(changes["taskAdd"]?.currentValue)
        }
    }
}