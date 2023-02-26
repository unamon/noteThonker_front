import { Component } from '@angular/core';
import {Observable,concat, of, tap, debounceTime, switchMap, BehaviorSubject, distinctUntilChanged} from 'rxjs';
import { Note } from '../model/note';
import {NoteService} from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'noteThonker_front';
    notes:Note[] = []
    notes$: Observable<Note[]> = of(this.notes)
    getNotesObservable: Observable<Note[]>
    searchText$ = new BehaviorSubject("");
    searchSubscription = this.searchText$.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(text => this.noteService.searchNotes(text)),
        tap(data=> {
            this.notes = data
            console.log(data)
        })
    ).subscribe()

    executeRequest(incRequest$:Observable<unknown | Note>){
        concat(incRequest$, this.getNotesObservable).subscribe()
    }
    searchNotes(e:any){
        this.searchText$.next(e.target.value)
    }
    constructor(private noteService:NoteService,) {
        this.getNotesObservable = noteService.getNotes().pipe(
            tap(data => this.notes = data)
        )
        this.getNotesObservable.subscribe()
    }
    trackItem(index:Number, note:Note) {
        return note.id
    }
 
}
