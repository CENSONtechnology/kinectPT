import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/map';
@Injectable()
export class ExerciseService {

  constructor(private afDb: AngularFireDatabase) {  }

  armDates = [];
  legDates = [];
  shrugDates = [];
  armValues = [];
  legValues = [];
  shrugValues = [];

  getLeftLeg() {
    console.log(this.afDb.list('data'));
    return this.afDb.list('data/LeftLegLift') as FirebaseListObservable<IExercise[]>;
  }

  getRightArm() {
    console.log(this.afDb.list('data'));
    return this.afDb.list('data/RightArmLift') as FirebaseListObservable<IExercise[]>;
  }

  getShrugs() {
    console.log(this.afDb.list('data'));
    return this.afDb.list('data/ShrugShoulders') as FirebaseListObservable<IExercise[]>;
  }

  //Dates
  getArmDates() {
    return this.armDates.sort();
    //return ["1", "2", "3", "4"];
  }

  setArmDates(dates) {
    this.armDates = dates;
  }

  getLegDates() {
    return this.legDates.sort();
    //return ["1", "2", "3", "4"];
  }

  setLegDates(dates) {
    this.legDates = dates;
  }

  getShrugDates() {
    return this.shrugDates.sort();
    //return ["1", "2", "3", "4"];
  }

  setShrugDates(dates) {
    this.shrugDates = dates;
  }

  //Values
  getArmValues(){
    return this.armValues.sort(compare);
  }

  setArmValues(values){
    this.armValues = values;
  }

  getLegValues(){
    return this.legValues.sort(compare);
  }

  setLegValues(values){
    this.legValues = values;
  }

  getShrugValues(){
    return this.shrugValues.sort(compare);
  }

  setShrugValues(values){
    this.shrugValues = values;
  }

  
}

interface IExercise {
  Metric?: string;
  Date?: string;
  Value?: number;
}

function compare(a,b) {
  if (a.Date < b.Date)
    return -1;
  if (a.Date > b.Date)
    return 1;
  return 0;
}