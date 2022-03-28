//our root app component
import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  template: `
    <my-tabs>
      <my-tab [tabTitle]="'Tab1'">
          <p>OLA</p>
          <p>Tab1 Content</p>
          <p>AAAAAAAAAAAA</p>
      </my-tab>
      <my-tab [tabTitle]="'Tab2'">
          <p>Tab2 Content</p>
      </my-tab>
    </my-tabs>
  `,
})
export class AppComponent {}
