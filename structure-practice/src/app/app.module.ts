import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/book/service/service.module';
import { BooklistModule } from './domain/booklist/booklist.module';
import { BookdetailModule } from './domain/bookdetail/bookdetail.module';
import { BookwidgetComponent } from './shared/bookwidget/bookwidget.component';
import { SmartComponent } from './components/smart/smart.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SmartComponent, PresentationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ServiceModule,
    //if routed -> not import these modules below, and import servicemodule for 2 of these
    // BooklistModule,
    // BookdetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
