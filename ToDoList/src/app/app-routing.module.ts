import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/main/form/form.component';
import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/main/error/error.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'toDoList', component: MainComponent, children: 
    [
      {path: 'addToDo', component: FormComponent},
      {path: ':id', component: FormComponent}
    ]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
