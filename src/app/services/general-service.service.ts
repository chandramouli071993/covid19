import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { GeneralData } from "../Beans/generalData";
import { CountriesList } from "../Beans/CountriesList";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GeneralServiceService {
  constructor(private http: HttpClient) {}

  generalDataFetch() {
    return this.http
      .get<GeneralData>("https://api.thevirustracker.com/free-api?global=stats")
      .pipe(
        map((generalData) => {
          return generalData.results;
        }),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //console.log(errorMessage);
    return throwError(errorMessage);
  }

  countriesDataFetch() {
    return this.http
      .get<CountriesList>(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      )
      .pipe(
        map((generalData) => {
          // console.log(generalData.countryitems);
          return generalData.countryitems[0];
        })
      );
  }
}
