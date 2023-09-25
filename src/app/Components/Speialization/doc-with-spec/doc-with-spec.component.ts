import { Component, OnInit } from '@angular/core';
import { CurewellservService } from '../../../curewellserv.service';

@Component({
  selector: 'app-doc-with-spec',
  templateUrl: './doc-with-spec.component.html',
  styleUrls: ['./doc-with-spec.component.css']
})
export class DocWithSpecComponent implements OnInit {

  constructor(public serv:CurewellservService) { }
  
  ngOnInit(): void {
  }

}
