import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UiService} from "../../service/ui.service";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() clickAdd = new EventEmitter();

  public title = 'Raw Task Header';
  public add = 'add';
  public color = 'green';

  showAddTask = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {

    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log('toggle');
    this.uiService.toggleAddTask();
    this.clickAdd.emit();
  }

}
