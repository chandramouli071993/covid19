import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { CountriesList } from 'src/app/Beans/CountriesList';
import { CountryWise } from 'src/app/Beans/countryWise';
import { Router } from '@angular/router';
import {MatTable} from '@angular/material/table'
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private service : GeneralServiceService, private router: Router) { 
    this.sortedData = this.countriesList.slice();
  }

  countriesMap : Map<String, CountryWise>;
  countriesList : CountryWise[] = [];
  dataSource : any;
  sortedData: CountryWise[];

  displayedColumns: string[] = ['Country'
  , 'Total Cases', 'Active Cases', 'Deaths', 
  'New Cases Today', 'New Deaths Today', 'Recovered Cases', 'Serious Cases'
  ];

  ngOnInit() {
    let map = new Map<string, CountryWise>();
    this.service.countriesDataFetch().subscribe(genData => { 
      for (var value in genData) {  
            map.set(value,genData[value])  
            this.countriesList.push(genData[value]);
          } 
    }
    , 
    error => {
      console.log(error);
      this.router.navigate(['error']);
    }
    );

    this.sortedData = this.countriesList;
}

sortData(sort: Sort) {
  const data = this.countriesList.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }

  this.sortedData = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'title': return this.compare(a.title, b.title, isAsc);
      case 'total_cases': return this.compare(a.total_cases, b.total_cases, isAsc);
      case 'total_deaths': return this.compare(a.total_deaths, b.total_deaths, isAsc);
      // case 'carbs': return this.compare(a.carbs, b.carbs, isAsc);
      // case 'protein': return this.compare(a.protein, b.protein, isAsc);
      default: return 0;
    }
  });
}

compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

}
