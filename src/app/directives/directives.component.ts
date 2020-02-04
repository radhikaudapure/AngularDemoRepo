import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showTitle=false;

  employees =[
    {name:'Radhika',id:1},
    {name:'Pratima',id:2},
    {name:'Poonam',id:3},
    {name:'Sandeep',id:4},
    {name:'Nikhil',id:5}
  ]
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

}
