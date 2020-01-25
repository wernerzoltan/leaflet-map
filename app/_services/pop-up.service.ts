import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +  `<div>Name: ${ data.name }</div>` + `<div>Population: ${ data.population }</div>`;
  }


}
