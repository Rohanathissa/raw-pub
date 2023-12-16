import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../service/token.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-main-menubar',
  templateUrl: './main-menubar.component.html',
  styleUrls: ['./main-menubar.component.scss']
})
export class MainMenubarComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  public userData: any;
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserLogin();
  }

  mainMenu(): void{
    this.userData = this.tokenService.getUser();
    console.log('@@@@@@@@main menu=== user==', this.userData);
    this.isLoggedIn = this.authService.isUserLogin();

    console.log('@@@@@@@@ this.isLoggedIn=',  this.isLoggedIn);
  }
  logOut(): void{
    this.tokenService.signOut();
    this.isLoggedIn = false;
  }
  public loginUser(): void{
    this.isLoggedIn = true;
  }
}
