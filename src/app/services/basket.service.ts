import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  api: string = 'http://localhost:3000/';
  baskets: BasketModel[] = [];

  constructor(private _http: HttpClient) { this.getBaskets(); }

  delete(id: string) {
    this._http.delete<any>(this.api + 'baskets/' + id).subscribe({
      next: () => this.getBaskets(),
      error: (err) => console.log(err),
    });
  }

  getBaskets() {
    this._http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => (this.baskets = res),
      error: (err) => console.log(err),
    });
  }
}
