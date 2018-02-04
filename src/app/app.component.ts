import { Component } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KinectPT';
  datas:any;
  armDates = [];
  armValues =[];
  legDates = [];
  legValues = [];
  shrugDates = [];
  shrugValues =[];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(){
    this.exerciseService.getLeftLeg().subscribe(datas => {
      this.datas = datas;
      for (var i = 0; i < datas.length; i++){
        this.legDates.push(datas[i].Date);
        this.legValues.push(datas[i].Value);
      }
      console.log(this.datas);    
      console.log(this.legDates); 
      this.exerciseService.setLegDates(this.armDates);
      this.exerciseService.setLegValues(this.legValues);
    });

    this.exerciseService.getRightArm().subscribe(datas => {
      this.datas = datas;
      for (var i = 0; i < datas.length; i++){
        this.armDates.push(datas[i].Date);
        this.armValues.push(datas[i].Value);
      }
      console.log(this.datas);    
      console.log(this.armDates); 
      this.exerciseService.setArmDates(this.armDates);
      this.exerciseService.setArmValues(this.armValues);
    });

    this.exerciseService.getShrugs().subscribe(datas => {
      this.datas = datas;
      for (var i = 0; i < datas.length; i++){
        this.shrugDates.push(datas[i].Date);
        this.shrugValues.push(datas[i].Value);
      }
      console.log(this.datas);    
      console.log(this.shrugDates); 
      this.exerciseService.setShrugDates(this.shrugDates);
      this.exerciseService.setShrugValues(this.shrugValues);
    });
  }
}
