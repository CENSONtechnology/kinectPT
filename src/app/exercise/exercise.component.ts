import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: string[] = ['arm raises', 'leg raises', 'shrugs', 'lunges'];
  constructor() { }

  ngOnInit() {
  }

}
