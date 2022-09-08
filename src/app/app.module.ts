import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoDetailComponent } from './Components/info-detail/info-detail.component';
import { HeaderTimeComponent } from './Components/header-time/header-time.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderTimeComponent,
    InfoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
