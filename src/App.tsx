import VMasker from "vanilla-masker";
import {
  Container,
  TextField,
  Grid,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LabelFields from "./components/LabelFields";
import useStores from "./hooks/useStore";
import Page from "./components/Page";
import MapStore from "./components/map/MapStore";
import TableStores from "./components/TableStores";

function App() {
  const { filterStoresByName, stores, billing, handleChangeBilling } =
    useStores();

  return (
    <Page>
      <Container>
        <Grid container spacing={3} sx={{ mb: "2rem" }}>
          <Grid item xs={12} md={8}>
            <LabelFields title="Buscar" />
            <Autocomplete
              fullWidth
              options={stores.map((store) => store.name)}
              size="small"
              getOptionLabel={(option) => option}
              noOptionsText="Loja não encontrada"
              onChange={(_, value) =>
                value ? filterStoresByName(value) : filterStoresByName("")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Pesquise por uma loja"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LabelFields title="Faturamento mínimo esperado" />
            <TextField
              fullWidth
              size="small"
              value={`R$ ${billing ?? "0.0"}`}
              placeholder="Ex. 15.000,00"
              onChange={(event) => {
                handleChangeBilling(VMasker.toMoney(event.target.value));
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mb: "2rem" }}>
          <Grid item xs={12} lg={8}>
            <MapStore />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TableStores />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default App;
