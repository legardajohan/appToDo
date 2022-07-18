import { Component, OnInit } from '@angular/core';
import { toDoInterface } from 'src/app/interfaces/toDo.interface';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  titleInput!: string;
  descriptionInput!: string;
  creatorInput!: string;
  stateInput!: string;

  index!: number;
  edition!: number;
  actionTitle: string = 'Agregar tarea';

  constructor(private toDoService: ToDoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.edition = +this.route.snapshot.queryParams['edition'];

    if (this.edition != null && this.edition === 1) {
      let toDo: toDoInterface = this.toDoService.findToDO(this.index);
      this.actionTitle = 'Actualizar';
      this.titleInput = toDo.title;
      this.descriptionInput = toDo.description;
      this.creatorInput = toDo.creator;
      this.stateInput = toDo.state;
    }
  }

  saveToDo() {
    let newToDo = new toDoInterface(this.titleInput, this.descriptionInput, this.creatorInput, this.stateInput);

    if (this.edition != null && this.edition === 1) {
      this.toDoService.updateToDo(this.index, newToDo);
    } else {
      this.toDoService.addToDo(newToDo);
    }

    this.titleInput! = '';
    this.descriptionInput! = '';
    this.creatorInput! = '';
    this.stateInput! = '';
    this.router.navigate(['toDoList']);

  }

  cancel() {
    this.router.navigate(['/toDoList']);
  }

}
