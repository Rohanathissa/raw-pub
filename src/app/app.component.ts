import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'raw-product';

  mainMenuTabbSelectionChanged(event): void{
    console.log('@@@@@@@@@@@@@@@@@@@@@');
  }

}
