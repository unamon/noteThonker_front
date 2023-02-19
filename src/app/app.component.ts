import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {Observable, concat, flatMap, of} from 'rxjs';
import { Note } from '../model/note';
import {NoteService} from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'noteThonker_front';
  notes:Note[]
  notes$: Observable<Note[]>

	executeRequest(incRequest$:Observable<unknown | Note>){
	concat(incRequest$, this.noteService.getNotes()).subscribe(
					data => {
									this.notes = (data as Note[])
					}
	)	

	}
	trackItem(index:Number, note:Note) {
			return note.id
	}
	constructor(
			private noteService:NoteService,
			) {
				noteService.getNotes().subscribe(
								data => this.notes = data
				)
				this.notes$ = of(this.notes)
			}


}
