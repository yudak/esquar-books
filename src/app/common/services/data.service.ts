import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../api/api';
import { SearchResponse } from '../models/response';
import { BookItem } from "../models/book-item";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient,
              @Inject(BASE_URL) private baseUrl: string) { }

  search(search: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(this.baseUrl + search);
  }

  getBookDedatils(id: string): Observable<BookItem> {
    return this.httpClient.get<BookItem>(`${this.baseUrl}/${id}`);
  }

}
