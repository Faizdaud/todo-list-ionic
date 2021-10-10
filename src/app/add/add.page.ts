import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';

import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  //dedfine variables for ng Model
  id=1 ;
  name= "";
  place= "";
  image_Url="";

  constructor(public localService: LocalService, public router: Router) { }

  ngOnInit() {

  }

  addNewItem(){
        //create a new object from value the ngModel
        //like a schema
        let newItem = {
          id:this.localService.getCurrentId(),
          name:this.name,
          place: this.place,
          image_Url:this.image_Url
        }

        let newFile = {
          id:1 ,
          name:this.name,
          place: this.place,
          image_Url:this.image_Url
        }

         //Check if local storage is empty
         // If empty, create one with an id = 1
         let checkToDo = localStorage.getItem('todos');
         console.log(checkToDo);

        if(!checkToDo){
          this.localService.addItem(newFile);
        }
        else{
          this.localService.addItem(newItem);
        }
       
        // this.localService.addItem(newItem);
   
        this.router.navigate(['/home']);
  }

}
