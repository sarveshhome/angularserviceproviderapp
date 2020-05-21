import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message: string;
  constructor(private logservice: LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.getData('child 2');
  }

}
