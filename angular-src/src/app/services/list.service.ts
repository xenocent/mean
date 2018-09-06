import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../models/List'

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	})
  };

  class resp{
	  success:boolean
  }

@Injectable({
	providedIn: 'root'
})
export class ListService {

	constructor(private http: HttpClient) { }

	private respon = new resp;

	private serverApi = 'http://localhost:3000';

	public getAllLists(): Observable<List[]> {

		let URI = `${this.serverApi}/bucketlist/`;
		return this.http.get<List[]>(URI)
	}

	public deleteList(listId: string) {
		let URI = `${this.serverApi}/bucketlist/${listId}`;
		return this.http.delete(URI, httpOptions)
	}

	public addList(list: List) {
        let URI = `${this.serverApi}/bucketlist/`;
        
         let body = JSON.stringify({title: list.title, description: list.description, category: list.category});
        
        return this.http.post<resp>(URI, body ,httpOptions)
    }
}