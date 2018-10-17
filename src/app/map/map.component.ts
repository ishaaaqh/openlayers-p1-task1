import { Component, OnInit } from '@angular/core';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// import transform from 'ol/proj';
import { Map, View, Overlay } from 'ol';
import toStringHdms from 'ol/coordinate';
// import transform  from 'ol/proj';
// import  TileLayer  from 'ol/layer';
// import VectorLayer from 'ol/layer/Vector.js';
// import OSM from 'ol/source/OSM';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
       let layer = new TileLayer({
          source: new OSM()
        });

        // let center = transform([-1.812, 52.443], 'EPSG:4326', 'EPSG:3857');

        let overlay = new Overlay({
          element: document.getElementById('overlay'),
          positioning: 'bottom-center'
        });

        let view = new View({
          center: [10.0015, 17.56],
          zoom: 6
        });

        let map = new Map({
          target: 'map',
          layers: [layer],
          view: view
        });

        // register an event handler for the click event
        map.on('click', function(event) {
          // extract the spatial coordinate of the click event in map projection units
          let coord = event.coordinate;
          // transform it to decimal degrees
          // let degrees = transform(coord, 'EPSG:3857', 'EPSG:4326');
          // format a human readable version
          // let hdms = toStringHDMS(degrees);
          // update the overlay element's content
          let element = overlay.getElement();
          element.innerHTML = coord;
          // position the element (using the coordinate in the map's projection)
          overlay.setPosition(coord);
          // and add it to the map
          map.addOverlay(overlay);
        });
     }

}
