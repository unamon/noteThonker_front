import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/model/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
@Output("getNotes")
getRequestEmitter = new EventEmitter();
@Input()
note:Note;
@Input()
noteId:Number;
@Input()
selected = false;
// @Input()
// elseText;string;
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

submitNote() { 
  this.http.put("http://localhost:4200/" + this.noteId,{})
  this.getRequestEmitter.emit()
  console.log("sent")
}

constructor(private http:HttpClient){}
} 
