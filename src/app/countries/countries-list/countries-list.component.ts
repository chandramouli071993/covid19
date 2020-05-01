import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { CountriesList } from 'src/app/Beans/CountriesList';
import { CountryWise } from 'src/app/Beans/countryWise';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private service : GeneralServiceService, private router: Router) { }

  countriesMap : Map<String, CountryWise>;
  countriesList : CountryWise[] = [];
  dataSource : any;
  displayedColumns: string[] = ['title', 'total_cases', 'total_active_cases', 'total_deaths', 
  'total_new_cases_today', 'total_new_deaths_today', 'total_recovered', 'total_serious_cases'
  ];
  
  //, 'Total Cases', 'Active Cases', 'Deaths' , 'Cases Today', 
  //'Deaths Today', 'Recovered Cases', 'Serious Cases'];

  ngOnInit() {
    let map = new Map<string, CountryWise>();
    this.service.countriesDataFetch().subscribe(genData => { 
      for (var value in genData) {  
            map.set(value,genData[value])  
            this.countriesList.push(genData[value]);
          } 
    }
    // , 
    // error => {
    //   console.log(error);
    //   this.router.navigate(['error']);
    // }
    );
    console.log(this.countriesList);
    this.dataSource = new MatTableDataSource(this.countriesList);
}

}
