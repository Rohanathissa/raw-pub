import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TASKS} from '../mock-tasks';
import {TasksServiceService} from '../../service/tasks-service.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  isShowAddTaskForm = false;

  constructor(private tasksServiceService: TasksServiceService, ) {
  }

  ngOnInit(): void {
    this.tasksServiceService.getTasks().subscribe(res => {
      console.log('res==', res);
      this.tasks = res;
    });
  }

  deleteTask(task: Task): void {
    console.log(' deleteTask($even): void', task);
    this.tasksServiceService.deleteTask(task).subscribe(res => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      console.log('res==', res);
      // this.tasks = res;
    });
  }

  updateTask(task: Task): void {
    task.reminder = !task.reminder;
    console.log('res==', task.reminder);
    this.tasksServiceService.updateTask(task).subscribe(res => {
      console.log('res==', res);
    });
  }
  // @ts-ignore
  addTask(task: Task): Task{
    console.log('task==', task);
    this.tasksServiceService.addTask(task).subscribe(res => {
      this.tasks.push(task);
      console.log('res==', res);
    });
  }
  clickAdd(): void{
    console.log('@@@@@@@@@@@@@@@@@@@@@');
  }

}
