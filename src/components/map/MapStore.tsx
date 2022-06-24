import GoogleMapReact from "google-map-react";
import { v4 as uuidV4 } from "uuid";
import { Box } from "@mui/material";
import MapPoint from "./MapPoint";
import useStores from "../../hooks/useStore";

export default function MapStore() {
  const { stores } = useStores();

  const defaultProps = {
    center: {
      lat: -23.568767,
      lng: -46.649907,
    },
    zoom: 12,
  };

  return (
    <Box className="Map" sx={{ height: "30rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {stores.map((store) => (
          <MapPoint
            key={uuidV4()}
            lat={store.latitude}
            lng={store.longitude}
            revenue={store.revenue}
            name={store.name}
            city={store.city}
            state={store.state}
          />
        ))}
      </GoogleMapReact>
    </Box>
  );
}
