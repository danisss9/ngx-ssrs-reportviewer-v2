import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reportServer: string = 'http://ssrs-testserver.westus2.cloudapp.azure.com/reportserver';
  reportUrl: string = 'SampleWithParameters';
  showParameters: string = "false"; //true, false, collapsed
  showBackButton: string = "false"; //true, false
  parameters: any = {
    "SampleStringParameter": "String",
    "SampleBooleanParameter": false,
    "SampleDateTimeParameter": "2/9/2019",
    "SampleIntParameter": 12345,
    "SampleFloatParameter": "123.1234",
    "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
  };
  language: string = "en-us";
  width: number = 50;
  height: number = 50;
  toolbar: string = "false";
}

