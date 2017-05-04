import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AstronautComponent } from './astronaut/astronaut.component';
import { PassesComponent } from './passes/passes.component';
import { CurrentComponent } from './current/current.component';
import { MainComponent } from './main/main.component';
import { SunTimesComponent } from './sun-times/sun-times.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'sun', component: SunTimesComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    PassesComponent,
    CurrentComponent,
    MainComponent,
    SunTimesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
