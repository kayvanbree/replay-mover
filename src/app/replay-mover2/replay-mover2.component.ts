import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-replay-mover2',
  templateUrl: './replay-mover2.component.html',
  styleUrls: ['./replay-mover2.component.scss']
})
export class ReplayMover2Component implements OnInit {
  public input: string = "";
  public timelines: any[] = [];
  private jsonInput: any = {};
  public translation = {
    x: 0,
    y: 0,
    z: 0,
  };
  public timeOffset = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  }
  public negativeTimeOffset: boolean = false;
  public selectedTimeline: string = "";
  public output: string = "";
  private newJson: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  analyze(): void {
    this.jsonInput = JSON.parse(this.input);
    this.timelines = Object.keys(this.jsonInput);
    this.selectedTimeline = this.timelines[0];
  }

  move(): void {
    this.newJson = this.jsonInput;
    this.translateTime();
    this.translatePosition();
    this.output = JSON.stringify(this.newJson);
  }

  translateTime(): void {
    let timeKeyframes = this.newJson[this.selectedTimeline][0].keyframes;
    let dateTimeOffset: number =
      this.timeOffset.hours * 24 * 60 * 1000
      + this.timeOffset.minutes * 60 * 1000
      + this.timeOffset.seconds * 1000
      + this.timeOffset.miliseconds;
    console.log(dateTimeOffset);

    for(var i = 0; i < timeKeyframes.length; i++) {
      let timestamp = timeKeyframes[i].properties.timestamp;
      if (this.negativeTimeOffset) {
        timeKeyframes[i].properties.timestamp = timestamp - dateTimeOffset;
      } else {
        timeKeyframes[i].properties.timestamp = timestamp + dateTimeOffset;
      }
    }
  }

  translatePosition(): void {
    let positionKeyframes = this.newJson[this.selectedTimeline][1].keyframes;

    for (var i = 0; i < positionKeyframes.length; i++) {
      // Translate camera position
      let cameraPosition = positionKeyframes[i].properties["camera:position"][0];
      cameraPosition += this.translation.x;
      cameraPosition += this.translation.y;
      cameraPosition += this.translation.z;
    }
  }
}
