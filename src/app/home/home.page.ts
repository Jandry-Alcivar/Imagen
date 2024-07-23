import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
ngOnInit(){
  
  this.getPosition()
}

  CargarMapa( longitude:any, latitude: any,){
    const map = new mapboxgl.Map({
      accessToken:
      'pk.eyJ1IjoidGhvbWFza2x6IiwiYSI6ImNsM3VibWJwbTI4emkzZXBlamVjOHp0Z2YifQ.QhFxYxdIC2m4vGlEkMqrow', // tu clave de API de mapbox
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [longitude,latitude], // starting position [lng, lat]
      zoom: 13, // starting zoom
      });
      map.on('load', function() {
        map.resize();
       }) 
       map.addControl(new mapboxgl.NavigationControl());
       map.addControl(new mapboxgl.FullscreenControl());
       map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));

        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(../../assets/marcador-de-posicion.png)';
        el.style.width = '32px';
        el.style.height = '32px';  

          const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            'Construction on the Washington Monument began in 1848.'
            );
            const marker = new mapboxgl.Marker(el)
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(map);
    };
    async getPosition(){


      const coordinates = await Geolocation.getCurrentPosition();
      const {longitude, latitude} = coordinates.coords;
      this.CargarMapa(longitude, latitude );
      console.log('Current position:', coordinates);
  
  
  }
}
