import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-add-rask',
  templateUrl: './add-rask.component.html',
  styleUrls: ['./add-rask.component.scss']
})
export class AddRaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  public text: string;
  public day: string;
  public reminder: boolean;
  public isAddTask = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (!this.text) {
      alert('please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    console.log('newTask===', newTask);

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
