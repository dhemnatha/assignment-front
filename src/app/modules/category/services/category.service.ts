import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable,} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    return  this.http.get(environment.apiUrl + `/categories`).pipe(map(data => data['results']));
  }

}
