import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items:any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(env){
    console.log(env);
    
    setTimeout(() => {
      this.items = Array(20);
      env.target.complete();
    }, 1500);

  }

}
