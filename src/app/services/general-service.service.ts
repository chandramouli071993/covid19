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
        "https://api.thevirustracker.com/free-api?global=stats"
      ).pipe(
        map(generalData => {
          return generalData.results;
        })
      )
  }
}
