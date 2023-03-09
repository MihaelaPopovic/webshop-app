import { WebsiteRoutingModule } from './website/website-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { WebsiteModule } from './website/website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    WebsiteModule,
    WebsiteRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
