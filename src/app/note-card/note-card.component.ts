import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/model/note';
import {NoteService} from '../note-service.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
@Output("reqNotes")
requestEmitter = new EventEmitter<Observable<unknown | Note>>();
@Input()
note:Note;
@Input()
noteId:Number;
@Input()
selected = false;

noteClasses()  { 
  return this.selected ? "selected" : ""
}

noteClicked() { 
  if (!this.selected) {
    this.selected = true
  }
}

unSelect() {
this.selected = false
}

deleteNote() { 
  this.requestEmitter.emit(this.noteService.deleteNote(this.noteId))
}
submitNote() { 
  this.requestEmitter.emit()
  console.log("sent")
}

constructor(private noteService:NoteService){}
} 
