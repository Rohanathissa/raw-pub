import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task';
import {UiService} from '../../service/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Input() isShowAddTaskForm: boolean;
  public text: string;
  public day: string;
  public reminder: boolean;
  public isAddTask = false;

  public subscription: Subscription;
  constructor(private  uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.isAddTask = value));
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
