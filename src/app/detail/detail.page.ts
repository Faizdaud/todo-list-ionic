import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id ="";

  constructor(private activatedRoute: ActivatedRoute) { }

  //when the page is loaded, get the value of id from parameter
  ngOnInit() {
    //get the value of id from parameter
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
