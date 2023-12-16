import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const IS_LOGIN = 'is-login';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public authUser: string;

  constructor() {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, '123456');

    console.log('window.sessionStorage', window.sessionStorage);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    console.log(' user', user);
    this.authUser = user[0]?.email;
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, this.authUser);
    window.sessionStorage.setItem(IS_LOGIN, String(true));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    console.log('user@@@@@sessionStorage@@@@@@', window.sessionStorage);
    console.log('user@@@@@@@@@@@', user);

    if (user) {
      return user;
    }
    return {};
  }
}
