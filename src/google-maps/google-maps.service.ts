// import { Injectable } from '@nestjs/common';
// import { Client } from '@googlemaps/google-maps-services-js';

// @Injectable()
// export class GoogleMapsService {
//   private client: Client;

//   constructor() {
//     this.client = new Client({});
//   }

//   async getDirections(origin: string, destination: string): Promise<any> {
//     const response = await this.client.directions({
//       params: {
//         origin,
//         destination,
//         key: 'YOUR_GOOGLE_MAPS_API_KEY',
//       },
//     });

//     return response.data;
//   }
// }

import { Injectable } from '@nestjs/common';
import * as googleMaps from '@googlemaps/google-maps-services-js';

@Injectable()
export class GoogleMapsService {
  private readonly client: googleMaps.Client;

  constructor() {
    this.client = new googleMaps.Client({});
  }

  async getRoute(origin: string, destination: string): Promise<any> {
    const response = await this.client.directions({
      params: {
        origin,
        destination,
        // mode: 'driving',
        optimize: true,
        key: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API Key
      },
    });
    return response.data;
  }

  async geocodeAddress(address: string): Promise<any> {
    const response = await this.client.geocode({
      params: {
        address,
        key: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API Key
      },
    });
    return response.data;
  }
}
