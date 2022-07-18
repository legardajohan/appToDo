import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { toDoInterface } from 'src/app/interfaces/toDo.interface';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Creamos array para recibir tareas del servicio
  toDoList: toDoInterface[] = [];

  // instanciamos el servicio
  constructor(private toDoService: ToDoService,
              private router: Router) { }

  // durante la creación del componente se cargan los datos del servicio a este componente
  ngOnInit(): void {
    this.toDoList = this.toDoService.toDoList;
    console.log(this.toDoList)
  }

  addToDo() {
    this.router.navigate(['toDoList/addToDo']);
  }

}
