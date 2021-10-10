import { Component, OnInit } from '@angular/core';
import {LocalService} from '../local.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Create an array of strings called todo list
  //store all the tasks 
  //todoList = ["Exercise", "Watch TV", "Clean Room"]
  //create an array of objects if you want to have more properties of each task

  todoList = []

  constructor(private localService:LocalService) {}

    //when page is loaded, I will retrive data from the service
  //control lifecycle of component

    ngOnInit(){
      // this.todoList = this.localService.readAllItems();
    }  

    ionViewWillEnter() {
      this.todoList = this.localService.readAllItems();
      console.log("here ionViewWillEnter");
      console.log(this.todoList);
    }
}
