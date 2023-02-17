import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Note } from '../model/note';
import {NoteService} from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'noteThonker_front';
	
    notes$: Observable<Note[]>

	reloadNotes() {
			const reload$ = this.noteService.getNotes();
	}
	ngOnInit() {
	}
	constructor(
			private noteService:NoteService
	) {
			this.notes$ = noteService.getNotes()
	}

}
