import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTask(event): void {
    console.log('delete===', event);
    this.onDeleteTask.emit(event);
  }

  onToggle(task){
    this.onToggleReminder.emit(task);
  }
}
