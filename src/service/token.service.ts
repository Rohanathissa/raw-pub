import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

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

    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user[0]);
    console.log('window.sessionStorage user', window.sessionStorage);

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    console.log('user@@@@@@@@@@@', window);
    console.log('user@@@@@@@@@@@', user);

    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
