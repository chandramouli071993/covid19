import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { CountriesList } from 'src/app/Beans/CountriesList';
import { CountryWise } from 'src/app/Beans/countryWise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private service : GeneralServiceService, private router: Router) { }

  countriesList : Map<String, CountryWise>;

  ngOnInit() {
    let map = new Map<string, CountryWise>();
    this.service.countriesDataFetch().subscribe(genData => { 
      console.log(genData);  
      for (var value in genData) {  
            map.set(value,genData[value])  
          } 
    }, 
    error => {
      console.log(error);
      this.router.navigate(['error']);
    });

    for (var value1 in map) {
      this.countriesList.set(value1, map[value1]);
      console.log(this.countriesList.size);
  }
}

}
