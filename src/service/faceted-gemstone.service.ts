import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FacetedGemstoneService {
  private apiUrl = 'http://localhost:5000/products';
  private http: any;

  constructor() {
  }

  getProduct(): Observable<any[]> {
    return this.http.get(this.apiUrl);
  }
}
