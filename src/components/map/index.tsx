import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = () => {
  mapboxgl.accessToken = "pk.eyJ1IjoidmluaW9vIiwiYSI6ImNrbnMxcDBicDBkd3gydnJvNTBua29pcDEifQ.BKD-fl8CmQN5yR0eZeWILA";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-43.9272119, -19.9438039],
      zoom: 9,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");

    const marker = new mapboxgl.Marker().setLngLat([-43.9272119, -19.9438039]).addTo(map);

    map.on('load', () => {
      map.resize();
    })
  }, []);

  return <div id="mapContainer" className="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default Map;
