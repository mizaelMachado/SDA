<template>
  <div style="height: 350px;">
 
    <l-map 
      style="height: 80%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data () {
    return {
      myCoordenates:{ 
        lat: 0,
        lng: 0,
       },
      mapCoordenates:{ 
        lat: 0,
        lng: 0,
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [47.413220, -1.219482], 
      markerLatLng: [47.313220, -1.319482], 
      bounds: null,
      icon: { 
        type: [Object],
        custom: false,
        default: () => new Icon.Default(),
    },
    };
  },created(){
      this.$getLocation({}) 
      .then(coordinates => {
        this.center = coordinates; 
        this.markerLatLng= coordinates;
        this.myCoordenates = coordinates;
       })
      .catch(error => alert(error));
     
    },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
}
</script>

