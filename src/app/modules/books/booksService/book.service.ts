import { body } from './../../../services/login/login.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Configs, handleError } from 'src/app/_configs/configs';
import { ArrayResponses, Responses } from 'src/app/_shared/models/responses';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }


  uploadFile(id: String, file: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);
    let req = new HttpRequest('post', Configs.apiUrl + 'Books/' + id + '/uploadFile', formData);
    return this.httpClient.request(req);
  }
  getbooks() {
    return this.httpClient.get<any>('assets/json/books.json')
    .toPromise()
    .then(res => <Book[]>res.data)
    .then(data => { return data; });
}

  addBook(a: Book): Observable<Responses<Book>> {
    return this.httpClient.post<Responses<Book>>(Configs.apiUrl + 'api/Books/Add', JSON.stringify(a), this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }


  getBooks(): Observable<ArrayResponses<Book>> {
    return this.httpClient.get<ArrayResponses<Book>>(Configs.apiUrl + 'api/Books/AllBooks', this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }
  
  getPublishedBooks(): Observable<ArrayResponses<Book>> {
    return this.httpClient.get<ArrayResponses<Book>>(Configs.apiUrl + 'Books/getPublishedBooks', this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }

  deleteBooks(id: number): Observable<ArrayResponses<Book>> {
    return this.httpClient.delete<ArrayResponses<Book>>(Configs.apiUrl + 'api/Books/Delete/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }

  publishBooks(id: String, published: Boolean): Observable<ArrayResponses<Book>> {
    let body = {
      published: published
    }
    return this.httpClient.patch<ArrayResponses<Book>>(Configs.apiUrl + 'Books/' + id + '/updateBook', JSON.stringify(body), this.httpOptions)
      .pipe(
        retry(1),
        catchError(handleError)
      )
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
}
