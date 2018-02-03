import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  //exercises: string[] = ['arm raises', 'leg raises', 'shrugs', 'asdf', 'asdf', 'sdf'];
  exerciseCollection: AngularFirestoreCollection<IExercise>;
  exercises: Observable<IExercise[]>;
  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseCollection = <AngularFirestoreCollection<IExercise>>this.exerciseService.getExercises();
    this.exercises = this.exerciseCollection.valueChanges();
  }

}

interface IExercise {
  name: string;
  value: number;
}