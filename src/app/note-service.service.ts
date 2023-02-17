import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from 'src/model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    private reqUrl:string = "http://localhost:8080/notes"

    public getNotes(): Observable<Note[]>{
		return this.http.get<Note[]>(`${this.reqUrl}`)
	}
	public deleteNote(id:Number){
		return this.http.delete(`${this.reqUrl}/${id}`)
	}
    constructor(private http:HttpClient) { }
}
