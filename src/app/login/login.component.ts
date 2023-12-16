import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../service/token.service';
import {MainMenubarComponent} from '../main-menubar/main-menubar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(MainMenubarComponent) mainMenubarComponent: MainMenubarComponent;
  form: any = {
    username: null,
    password: null
  };

  public userData: any;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public roles: string[] = [];
  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.getUsers().subscribe(res => {
      this.userData = res.filter(event => ((event.username === this.form.username) && (event.password === this.form.password)));
      if (this.userData.length) {
        this.tokenStorage.saveToken(this.userData);
        this.tokenStorage.saveUser(this.userData);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        // this.mainMenubarComponent.loginUser();
        this.router.navigate(['/home']).then(r => '/');

      }else {
        alert('Invalid User');
      }
    });
  }


}
