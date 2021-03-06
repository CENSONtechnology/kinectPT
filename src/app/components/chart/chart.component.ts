import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private exerciseService: ExerciseService) {

    this.data.labels = this.exerciseService.getArmDates();
   }
  datas: any;
  private times = [];
  title = "";

  ngOnInit() {
    this.data.labels = this.exerciseService.getArmDates();
  }

  type = 'line';
  data = {
    labels: this.exerciseService.getArmDates(),
    datasets: [
      {
        label: "Arm Movement Degree Progress",
        data: this.exerciseService.getArmValues(),
        backgroundColor: [
          'rgba(54, 162, 235, 0.0)',
        ],
        borderColor: [
          'rgba(54, 162, 235, .8)'
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
