import { Component, ElementRef, ViewChild } from '@angular/core';
import { NOTES } from 'src/data';
import {Note} from "../model/note"
import { NoteCardComponent } from './note-card/note-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noteThonker_front';

  notes = NOTES

}
