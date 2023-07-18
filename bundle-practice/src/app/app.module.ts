import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareAComponent } from './share/share-a/share-a.component';
import { ShareBComponent } from './share/share-b/share-b.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { SharedModule } from './share/shared/shared.module';
import { Com1Module } from './com1/com1.module';
import { Com2Module } from './com2/com2.module';
import { ShareService } from './services/share.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
