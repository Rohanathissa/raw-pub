import {Injectable} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {Observable, Subject} from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask = false;
  private subject = new Subject<any>();

  constructor() {
  }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    console.log('toggleAddTask');
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
