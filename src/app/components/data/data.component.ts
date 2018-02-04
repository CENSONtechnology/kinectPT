import { Component, OnInit } from '@angular/core';
import { GraphService } from 'app/services/graph.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private graphService: GraphService) { }
  current = "";
  arm = false;
  leg = false;
  shrugs = false;

  ngOnInit() {

    this.current = this.graphService.getCurrent();
    console.log("Current:" + this.current);
    if (this.current == "arm raises"){
      this.arm = true;
    } else {
      this.arm = false;
    }
    if (this.current == "leg raises"){
      this.leg = true;
    } else {
      this.leg = false;
    }
    if (this.current == "shrugs"){
      this.shrugs = true;
    } else {
      this.shrugs = false;
    }

  }

}
