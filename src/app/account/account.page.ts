import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  async feed() {
    this.router.navigate(['/tabs'])

  }

}
