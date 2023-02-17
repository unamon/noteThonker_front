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
	
    notes$: Observable<Note[]>
    notes
	executeRequest(incRequest$:Observable<unknown | Note>){
			concat(incRequest$, this.notes$).subscribe(x => this.notes = x)
		//incRequest$.subscribe()
		//this.notes$ = this.noteService.getNotes() 
	}
	trackItem(index:Number, note:Note) {
			return note.id
	}
	constructor(
			private noteService:NoteService,
			) {
			this.notes$ = noteService.getNotes()
			this.notes$.subscribe(
					data=> this.notes = data
			)
			}


}
