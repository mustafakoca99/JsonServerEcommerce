import { AfterContentChecked, Component } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent implements AfterContentChecked {
  baskets: BasketModel[] = [];

  constructor(private _basket: BasketService) {}
  ngAfterContentChecked(): void {
    this.getBaskets();
  }

  getBaskets() {
    this.baskets = this._basket.baskets;
  }
}
