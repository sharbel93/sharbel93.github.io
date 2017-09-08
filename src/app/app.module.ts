import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SeedModule } from 'angular-message-history-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
