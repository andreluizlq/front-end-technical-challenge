import React from "react";
import GoogleMapReact from "google-map-react";
import MapPoint from "./MapPoint";
import { Box } from "@mui/material";

export default function MapStore() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box className="Map" sx={{ height: "30rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapPoint lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </Box>
  );
}
