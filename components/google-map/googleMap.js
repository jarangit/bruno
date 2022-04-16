import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./maker";
import {dataMarkerMap} from '../../data/markerMap'
const GoogleMap = ({ coordinates, setcoordinates, setbounds }) => {
  const center = {
    lat: 13.736717,
    lng: 100.523186,
  };
  const handleApiLoaded = (map, maps) => {
    return "Loadiing";
  };
  return (
    <div className="map" style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o" }}
        defaultCenter={center}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        margin={[50, 50, 50, 50]}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {dataMarkerMap && (
          dataMarkerMap.map((item,key) => (
            <Marker key = {key} lat={item.lat} lng={item.lng} text = "marker"/>
          ))
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
