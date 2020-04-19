import {Component, Input, OnInit} from '@angular/core';
import {GeneralServiceService} from "../services/general-service.service";
import {Data} from "../Beans/data";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() generalData: Data;

  constructor(private generalService: GeneralServiceService) {
  }

  ngOnInit() {
    this.generalService.generalDataFetch().subscribe(genData => {
      this.generalData = genData;
      console.log(this.generalData);
    });

  }

}
