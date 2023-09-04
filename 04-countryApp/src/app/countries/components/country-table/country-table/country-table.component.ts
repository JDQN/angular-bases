import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/countries.interfaces';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
