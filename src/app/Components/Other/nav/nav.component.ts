import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public serv:CurewellservService,private router:Router) { }
username:string;
  ngOnInit(): void {
    this.username=localStorage.getItem("username");
  }

  logout(){
    this.serv.logOut();
    this.router.navigate(['']);
  }

}
