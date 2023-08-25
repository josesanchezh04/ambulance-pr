import { TaskType } from "../types/task.type";

export class TaskService {
    tasks:TaskType[] = [
        {
            title:'Modificar componente login ',
            responsable: 'Jose',
            points: 5,
            startDate: new Date(2023,5,1)
        },
        {
            title:'Modificar codigo QR  ',
            responsable: 'Maria',
            points: 2,
            startDate: new Date(2023,5,2)
        },
        {
            title:'Crear grafico',
            responsable: 'Atenas',
            points: 3,
            startDate: new Date(2023,5,3)
        }
      ]

}