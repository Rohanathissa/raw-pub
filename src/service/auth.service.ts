import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/model/user';

@Injectable({
  providedIn: 'root'
})
  export class AuthService {
  private apiUrl = 'http://localhost:5000/user';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<User[]>(url);
  }
  getUserById(id): Observable<User[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User[]>(url);
  }
  isUserLogin(): boolean{
    if (window.sessionStorage.getItem('is-login') === 'true'){
      return true;
    }
    return false;
}
}
