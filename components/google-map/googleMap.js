import React from "react";
import GoogleMapReact from "google-map-react";
const GoogleMap = ({ coordinates, setcoordinates, setbounds }) => {

  const  center = {
    lat: 13.736717,
    lng: 100.523186
  }
  return (
    <div className="map" style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4Zxfe4I4S9qjPyVT0cG6Hy8FF8_gK-9o" }}
        defaultCenter={center}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
       
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;