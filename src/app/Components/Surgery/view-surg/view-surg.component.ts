import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';

@Component({
  selector: 'app-view-surg',
  templateUrl: './view-surg.component.html',
  styleUrls: ['./view-surg.component.css']
})
export class ViewSurgComponent implements OnInit {

  constructor(public serv:CurewellservService) { }

  ngOnInit(): void {
    this.serv.getSurgeriesForToday();
  }

  setSurgeryDetails(id,did,sd,st,et,sc){
    console.log(id.textContent);
    console.log(did.textContent);
    console.log(sd.textContent);
    console.log(sc.textContent);
    console.log(new Date(sd.textContent));
    this.serv.surgData.surgeryId=id.textContent;
    this.serv.surgData.doctorId=did.textContent;
    this.serv.surgData.surgeryDate=new Date(sd.textContent);
    console.log(this.serv.surgData.surgeryDate);
    this.serv.surgData.surgeryCategory=sc.textContent;
  }

}
