import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DragAndDropService, ScheduleModule, TimelineViewsService, ResizeService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
  ],
  providers: [
    TimelineViewsService, 
    ResizeService,
    DragAndDropService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
