import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TabsComponent, TabComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent],
})
export class AppModule {}
