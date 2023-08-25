import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShowTime } from './components/show-time/show-time.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowTime,
    ResponsableComponent,
    ListTaskComponent,
    FormTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
