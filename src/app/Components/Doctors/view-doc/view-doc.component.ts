import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Doctor } from '../../../Model/doctor.model';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocComponent implements OnInit {

  constructor(public serv:CurewellservService) {
   }

   ngOnInit(): void {
     this.serv.getDoctors();
   }

   upd(id){
    console.log(id.textContent);
    this.serv.upddocid=id.textContent;
   }

  

}
