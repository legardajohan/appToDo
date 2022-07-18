import { Component, Input, OnInit } from '@angular/core';
import { toDoInterface } from 'src/app/interfaces/toDo.interface';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() toDo!: toDoInterface;
  @Input() index!: number;

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    console.log(this.toDo.title);
  }

  deleteToDo() {
    if (this.index != null) {
      this.toDoService.deleteToDo(this.index);
    }
  }
  
}
