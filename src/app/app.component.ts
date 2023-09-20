import { Component } from '@angular/core';
import { EventSettingsModel, GroupModel, HeaderRowsModel } from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public eventSettings: EventSettingsModel = { 
    dataSource: timelineResourceData,
    ignoreWhitespace: false 
  };
  public group: GroupModel = { resources: ['Categories'] };
  public weekHeaderRows: HeaderRowsModel[] = [{ option: "Date" }];
  public selectedDate: Date = new Date(2023, 0, 4);
  public categoryDataSource: Record<string, any>[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
  ];
    
}
