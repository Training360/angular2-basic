import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auchan-angular';
  sortKey = '';
  sortDirection = 1;

  list: Observable<any> = this.userService.read().pipe(
    map( data => {
      console.log(data);
      return data;
    })
  );

  constructor(
    private userService: UserService,
  ) {}

  onSort(key: string): void {
    if (this.sortKey === key) {
      this.sortDirection = -1;
    } else {
      this.sortDirection = 1;
    }
    this.sortKey = key;
  }
}
