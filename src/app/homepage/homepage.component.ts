import {Component, Input, OnInit} from '@angular/core';
import {GeneralServiceService} from "../services/general-service.service";
import {Data} from "../Beans/data";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() generalData: Data;

  constructor(private generalService: GeneralServiceService,
    private router: Router) {
  }

  ngOnInit() {
    this.generalService.generalDataFetch().subscribe(genData => {
      this.generalData = genData[0];
      console.log(this.generalData);
    }, 
    error => {
      console.log(error);
      this.router.navigate(['error']);
    });

  }

}
