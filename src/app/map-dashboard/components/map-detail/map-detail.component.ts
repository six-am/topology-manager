import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements AfterViewInit {
  title = 'MyGmaps';
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  
  map: google.maps.Map;

  lat = 45.508888;
  lng = -73.5616682;
  coordinates = new google.maps.LatLng(this.lat, this.lng)

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
    mapTypeId: 'terrain'
  };

  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    //this.marker.setMap(this.map);
    this.flightPath.setMap(this.map);
    var marker = new google.maps.Marker({
      position: this.map.getCenter(),
        // icon: {
        //   path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, //google.maps.SymbolPath.CIRCLE,
        //   scale: 4
        // },
        icon: "./assets/train.png",
        draggable: false,
        map: this.map
    });

    this.bermudaTriangle.setMap(this.map);
    this.map.data.addGeoJson(this.locations);
  }

  flightPlanCoordinates = [
    {lat: 45.508888, lng: -73.5616682},
    {lat: 46, lng: -74.5616682},
    {lat: 45.750, lng: -78.5616682},
    {lat: 45.508888, lng: -73.5616682}
  ];

  flightPath = new google.maps.Polyline({
    path: this.flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    visible: true
  });


  // triangleCoords = [
  //   {lat: 25.774, lng: -80.190},
  //   {lat: 18.466, lng: -66.118},
  //   {lat: 32.321, lng: -64.757},
  //   {lat: 25.774, lng: -80.190}
  // ];
  innerCoords = [
    {lat: 28.745, lng: -70.579},
    {lat: 29.570, lng: -67.514},
    {lat: 27.339, lng: -66.668}
  ];
  outerCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757}
  ];

  // Construct the polygon.
  bermudaTriangle = new google.maps.Polygon({
    paths: [this.outerCoords, this.innerCoords],//this.triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  

  locations = 
  { "type": "FeatureCollection",
    "features": [
      { "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
        "properties": {"prop0": "value0"}
        },
      { "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
            ]
          },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
          }
        },
      { "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
               [100.0, 1.0], [100.0, 0.0] ]
             ]
  
         },
         "properties": {
           "prop0": "value0",
           "prop1": {"this": "that"}
           }
         }
      ]
    };
  
  
}
