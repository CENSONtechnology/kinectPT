import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { GraphService } from 'app/services/graph.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: string[] = ['arm raises', 'leg raises', 'shrugs'];
  //exercises: any;
  constructor(private exerciseService: ExerciseService, private graphService: GraphService) { }

  setIt(curr){
    this.graphService.setCurrent(curr);
  }

  ngOnInit() {
    /*
    this.exerciseService.getExercises().subscribe(exercises => {
      this.exercises = exercises
      console.log(this.exercises);
    });
    */
  }

}
