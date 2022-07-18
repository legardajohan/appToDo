// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { toDoInterface } from "../interfaces/toDo.interface";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  // toDoList: toDoInterface[] = [];
  // endpoint: string = 'http://localhost:8000/'; 

  // Definimos un array usando la interface creada
  toDoList: toDoInterface[] = [
    new toDoInterface('Desarrollo App', 'Crear app en Angular', 'Johan Legarda', 'Pendiente'),
    new toDoInterface('Viaje', 'Realizar viaje a la ciudad capital', 'Daniel Quiroz', 'Completada')
  ];

  // constructor(private http: HttpClient) {}

  // getToDoList(): Observable<toDoInterface> {
  //   return this.http.get<toDoInterface>(`${this.endpoint}`);
  // }

  // función para tomar nueva tarea y agregarla a la lista
  addToDo(toDo: toDoInterface) {
    this.toDoList.push(toDo);
    console.log(this.toDoList);
  }

  findToDO(index: number) {
    let toDo: toDoInterface = this.toDoList[index];
    return toDo;
  }

  updateToDo(index: number, toDo: toDoInterface) {
    let newToDo = this.toDoList[index];
    newToDo.title = toDo.title;
    newToDo.description = toDo.description;
    newToDo.creator = toDo.creator;
    newToDo.state = toDo.state;
  }

  deleteToDo(index: number) {
    this.toDoList.splice(index, 1);
  }

}



