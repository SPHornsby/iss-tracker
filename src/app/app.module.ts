import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AstronautComponent } from './astronaut/astronaut.component';
import { PassesComponent } from './passes/passes.component';
import { CurrentComponent } from './current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    PassesComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
