import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/children/children.component';
import { ParentComponent } from './components/parent/parent.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    ParentComponent,
    ViewChildComponent,
    ContentChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
