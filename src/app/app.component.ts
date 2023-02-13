import { Component, ElementRef, ViewChild } from '@angular/core';
import { NOTES } from 'src/data';
import { Note } from '../model/note';
import { NoteCardComponent } from './note-card/note-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noteThonker_front';
  notes: Note[];

  getNotes(){
    this.http.get("http://localhost:8080/notes").subscribe(
      data => {
        this.notes = <Note[]>data
      })
  }
  
  ngOnInit() {
    this.getNotes()
  }
  constructor(private http: HttpClient) {}

  onGetNotes() { 
    this.getNotes()
  }
}
