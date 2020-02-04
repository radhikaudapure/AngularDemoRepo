import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  serverID: number = 10;  
  serverStatus: string = 'Online';
    
  allowNewServer = false;  
  color='red';

  name ="Angular"

  constructor() { 
    console.log("inside constructor") ;
  }  

  
  ngOnInit() {  
    console.log("inside ngOnInit") ;
  }  

  onToggleDisableButton(){
  console.log("onToggleDisableButton event");
  this.allowNewServer = !this.allowNewServer; 
  }

  onCreateServer(){
  alert("onCreateServer...");
  
  }
}
