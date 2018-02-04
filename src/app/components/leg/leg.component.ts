import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) {

    this.data.labels = this.exerciseService.getLegDates();
   }
  datas: any;
  private times = [];

  ngOnInit() {
    this.data.labels = this.exerciseService.getLegDates();
  }

  type = 'line';
  data = {
    labels: this.exerciseService.getLegDates(),
    datasets: [
      {
        label: "Leg Movement Degree Progress",
        data: this.exerciseService.getLegValues(),
        backgroundColor: [
          'rgba(54, 162, 235, 0.0)',
        ],
        borderColor: [
          'rgba(68, 205, 173, .8)'
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