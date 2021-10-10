import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocalService {

  todoList = [
//     "id": 1,
//     "name": "Exercise",
//     "location": "Gym",
//     "image_Url": "https://ca-times.brightspotcdn.com/dims4/default/f30199f/2147483647/strip/true/crop/4873x3367+0+0/resize/840x580!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F91%2Fc3%2F513dd6cc466ba548afefb1ea43d7%2F491555-fi-century-plaza-towers-full-jja-0006.JPG",
//     "time": "8:30am"
//   },
//    {
//     "id": 2,
//     "name": "Watch TV",
//     "location": "Home",
//     "image_Url": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
//     "time": "9:00pm"
//   },
//   {
//     "id": 3,
//     "name": "Clean Room",
//     "location": "Home",
//     "image_Url": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
//     "time": "5:00pm"
//   }
];

  constructor() {}

    //Create
      addItem(newItem){
        this.todoList.push(newItem);
        console.log(this.todoList);
        //save to to local browser/mobile app storage with the file name "todos", but change the JSON into a string 
        //local storage only accepts string
        localStorage.setItem("todos", JSON.stringify(this.todoList));
      }

    //Read
      readAllItems(){
        // return this.todoList;

        //read/retrive list from "todo" file located inside browser/mobile app local storage
        //save data into todos variable
        let todos = JSON.parse(localStorage.getItem("todos"));
        //default if() without an operator in the () is either true or false
        if (todos){
          this.todoList = todos;
        }else {
          this.todoList = [];
        }
        return this.todoList;

      }

      readAnItem(id) {
          // this.todoList = JSON.parse(localStorage.getItem("todos"));
        for(var i=0; i<this.todoList.length; i++){
          if(this.todoList[i].id == parseInt(id) ){
            return this.todoList[i];
          }        
        }
        return null;
      }

      // let searchItem = this.todoList.filter(val=>{
      //   return val.id === parseInt(id);
      // })
      // console.log(searchItem);
      // console.log(searchItem[0]);
      // return searchItem[0];
    // }

    //Update

   

    //Delete
    deleteItem(id){
      // //filter object
      // let filteredItem = this.todoList.filter(val=> {
      //   return val.id === parseInt(id);
      // })
      this.todoList = this.todoList.filter(val=> {
        return val.id !== parseInt(id);
      });

      localStorage.setItem("todos", JSON.stringify(this.todoList));



      //delete object from array  
    }

    getCurrentId(){
      //todoList = array (objects inside)
      //check if todoList exists
      //If not return id =1

        if(!this.todoList.length){
          return 1;
        }else {
          return this.todoList[this.todoList.length-1].id + 1; 
        }
      
  
    }
  }

