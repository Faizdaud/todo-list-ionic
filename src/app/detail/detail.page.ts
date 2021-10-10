import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../local.service';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  todoItem;

  constructor(private activatedRoute: ActivatedRoute,
     public localService: LocalService,
     public alertController: AlertController,
     public router: Router) { }

  //when the page is loaded, get the value of id from parameter
  //control lifecycle of component
  // ngOnInit() load component with specific id once when user is redirected to detail page 
  ngOnInit() {
    //get the value of id from url query
   
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todoItem = this.localService.readAnItem(this.id);
  }

  //function for delete button
  async deleteItem(){
    const alert = await this.alertController.create({
    
      header: 'Cofirmation',
      subHeader: 'Subtitle',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.localService.deleteItem(this.id)
            console.log('Confirm Okay');
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
