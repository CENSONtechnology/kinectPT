import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shrug',
  templateUrl: './shrug.component.html',
  styleUrls: ['./shrug.component.css']
})
export class ShrugComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) {

    this.data.labels = this.exerciseService.getShrugDates();
   }
  datas: any;
  private times = [];

  ngOnInit() {
    this.data.labels = this.exerciseService.getShrugDates();
  }

  type = 'line';
  data = {
    labels: this.exerciseService.getShrugDates(),
    datasets: [
      {
        label: "Shrug Movement Degree Progress",
        data: this.exerciseService.getShrugValues(),
        backgroundColor: [
          'rgba(54, 162, 235, 0.0)',
        ],
        borderColor: [
          'rgba(255, 150, 142, .8)'
        ]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
}

interface IExercise {
  Metric?: string;
  Date?: string;
  Value?: number;
}