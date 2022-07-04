import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-mover',
  templateUrl: './replay-mover.component.html',
  styleUrls: ['./replay-mover.component.scss']
})
export class ReplayMoverComponent implements OnInit {

  public input: string = "";
  public output: string = "";

  public translation = {
    x: 872,
    y: 200,
    z: 1479,
  };

  public timeline = "cinematic";

  constructor() { }

  ngOnInit(): void {
  }

  convert(): void {
    var jsonData = JSON.parse(this.input);
    console.log(jsonData);
    console.log(jsonData[this.timeline][1]);
    console.log(jsonData[this.timeline][1].keyframes);

    for(var i = 0; i < jsonData[this.timeline][1].keyframes.length; i++) {
      jsonData[this.timeline][1].keyframes[i].properties["camera:position"][0] = jsonData[this.timeline][1].keyframes[i].properties["camera:position"][0] + this.translation.x;
      jsonData[this.timeline][1].keyframes[i].properties["camera:position"][1] = jsonData[this.timeline][1].keyframes[i].properties["camera:position"][1] + this.translation.y;
      jsonData[this.timeline][1].keyframes[i].properties["camera:position"][2] = jsonData[this.timeline][1].keyframes[i].properties["camera:position"][2] + this.translation.z;
      console.log(jsonData[this.timeline][1].keyframes[i]);
    }

    this.output = JSON.stringify(jsonData);
    console.log(jsonData);
  }
}
