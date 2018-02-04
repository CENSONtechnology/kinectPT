import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {

  current = "";
  constructor() { }
  getCurrent(){
    return this.current;
  }

  setCurrent(current){
    this.current = current;
  }
}
