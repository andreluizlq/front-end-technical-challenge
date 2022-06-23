import React, { useEffect, useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import SearchStores from "./components/SearchStores";
import { storeApi } from "./utils/api";
import { IStore } from "./interfaces/store";
import MapStore from "./components/map/MapStore";

function App() {
  const [stores, setStores] = useState<IStore[]>([]);

  useEffect(() => {
    const getStore = async () => {
      const { data } = await storeApi.get("");
      setStores(data.stores);
    };
    getStore();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MapStore />
        </Grid>
        <Grid item xs={12}>
          <SearchStores stores={stores} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
