import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Note} from 'src/model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    private reqUrl = "http://localhost:8080"

    public getNotes(){
		return this.http.get<Note[]>(`${this.reqUrl}/notes`)
	}
    constructor(private http:HttpClient) { }
}
