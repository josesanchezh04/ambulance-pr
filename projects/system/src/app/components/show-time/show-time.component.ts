import { Component } from "@angular/core";

@Component({
    selector:'amb-show-time',               //etiqueta
    // selector: '.amb-show-time',          //clase
    // selector:'[amb-show-time]',          //atributo                             
    templateUrl: './show-time.component.html',
    styleUrls:['./show-time.component.css'],
})
export class ShowTime {
    currenTime = new Date().toISOString();
}