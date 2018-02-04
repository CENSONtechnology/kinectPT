import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map';
@Injectable()
export class ExerciseService {

  constructor(private afDb: AngularFireDatabase) {  }

  getExercises() {
    return this.afDb.list('exercise') as FirebaseListObservable<IExercise[]>;
  }
}

interface IExercise {
  metric: string;
  date: string;
  value: number;
}