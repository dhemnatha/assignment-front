import { Category } from './../models/category';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// import * as Rx from 'rxjs/Rx';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { TokenStoreService } from './../../auth/services/token-store.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     // 'Authorization': 'Bearer',
//   }),
// };


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    return  this.http.get(environment.apiUrl + `/categories`).pipe(map(data => data['results']));
  }

  getAlls() {
    // return (
    //   this.http.get<Category[]>(environment.apiUrl + `/categories`).pipe(
    //     map((response: any) => ({
    //       data: response.results,
    //       // id: response['id'],
    //       // categoryId: response.results.category_id,
    //       // parentId: response.results.parent_id,
    //       // count: response.results.count,
    //       // name: response.results.name,
    //       // show: true,
    //       // checked: false,
    //     })),
    //     catchError((error) => {
    //       return [];
    //     })
    //   )
    // );
    // return this.http.get(environment.apiUrl + '/categories');
  }

  getFaults() {
    return this.http.get(environment.apiUrl + '/categories');
  }
}
