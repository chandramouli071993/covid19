import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import {GeneralData} from "../Beans/generalData";

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private http : HttpClient) { }

  generalDataFetch() {
    return this.http
      .get<GeneralData>(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
      ).pipe(
        map(generalData => {
          return generalData.data;
        })
      )
  }
}
