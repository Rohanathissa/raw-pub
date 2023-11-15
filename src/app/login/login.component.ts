import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
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
        // this.reloadPage();
        this.router.navigate(['/task']);
      }else {
        alert('Invalid User');
      }
    });
  }


}
