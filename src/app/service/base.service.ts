/**
 * Crud service for Create, Read, Update, Delete methods.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  baseUrl = `http://localhost:3000/`;

  constructor(
    public http: HttpClient,
    public entityName: string,
  ) { }

  read(id?: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.entityName}/${id ? id : ''}`);
  }

}
