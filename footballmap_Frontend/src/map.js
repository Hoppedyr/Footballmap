import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import ars from "./ars.png";

const Wrapper = styled.div`
width ${props => props.width};
height ${props => props.height};
`;

export default class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [51.5, -0.09],
      zoom: 16,
      zoomControl: false
    });

    // var circle = L.circle([51.508, -0.11], {
    //   color: "red",
    //   fillColor: "#f03",
    //   fillOpacity: 0.5,
    //   radius: 5000000
    // }).addTo(this.map);

    var myIcon = L.icon({
      iconUrl: ars,
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    L.marker([51.5, -0.09], { icon: myIcon }).addTo(this.map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17
    }).addTo(this.map);
  }

  render() {
    return <Wrapper width="1280px" height="720px" id="map" />;
  }
}
