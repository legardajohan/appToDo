import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormComponent } from './components/main/form/form.component';
import { MainComponent } from './components/main/main.component';
import { ToDoComponent } from './components/main/to-do/to-do.component';
import { ToDoService } from './services/to-do.service';
import { ErrorComponent } from './components/main/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    ToDoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
