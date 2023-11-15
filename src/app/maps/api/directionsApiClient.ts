import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DirectionsApiClient extends HttpClient {
  public baseUrl: string =
    'https://api.mapbox.com/directions/v5/mapbox/driving';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string) {
    url = this.baseUrl + url;
    return super.get<T>(url, {
      params: {
        alterinatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
      },
    });
  }
}
