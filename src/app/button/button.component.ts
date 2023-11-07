import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log('@@@@@', this.text, 'eeeee===', this.color);
  }

  onClick(): void {
    console.log('addd 1234');
    this.btnClick.emit();
  }

}
