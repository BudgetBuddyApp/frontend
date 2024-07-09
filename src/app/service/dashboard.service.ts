import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ListResult } from '@app/model/api/list.result';
import { AggregatedExpense } from '@app/model/api/aggregated.expense';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

  getAggregatedExpensesForLastMonth(): Observable<
    ListResult<AggregatedExpense>
  > {
    return this.http.get<ListResult<AggregatedExpense>>(`${this.API}/expenses`);
  }
}
