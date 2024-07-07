import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListResult} from "../model/api/list.result";
import {AggregatedExpense} from "../model/api/aggregated.expense";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getAggregatedExpensesForLastMonth(): Observable<ListResult<AggregatedExpense>> {
    return this.http.get<ListResult<AggregatedExpense>>('http://localhost:3000/expenses');
  }
}
