import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

   capitals: string = 'http://localhost:8080/hello';

   constructor(private http: HttpClient, private popUpService: PopUpService) { }

    makeCapitalMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res) {
        const lat = c.location.coordinates[0];
        const lon = c.location.coordinates[1];
        const marker = L.marker([lon, lat]);

        marker.bindPopup(this.popUpService.makeCapitalPopup(c));

        marker.addTo(map);

      }
    });

  }

}
