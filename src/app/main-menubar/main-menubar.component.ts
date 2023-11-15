import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menubar',
  templateUrl: './main-menubar.component.html',
  styleUrls: ['./main-menubar.component.scss']
})
export class MainMenubarComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  constructor() { }

  ngOnInit(): void {
  }

}
