import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ExerciseService {

  constructor(private afs: AngularFirestore) {  }

  getExercises() {
    return this.afs.collection('/exercises');
  }

}