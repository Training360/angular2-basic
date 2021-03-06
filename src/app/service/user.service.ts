import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'users');
  }
}
