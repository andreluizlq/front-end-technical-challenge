import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import VMasker from 'vanilla-masker';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Stack,
  TextField,
  Grid,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IStore } from '../interfaces/store';
import LabelFields from './LabelFields';

interface ISearchStoresProps {
  stores: IStore[];
}

export default function SearchStores({ stores }: ISearchStoresProps) {
  const [billing, setBilling] = useState<string | null>();
  const [querys, setQuerys] = useState<string>();

  return (
    <Stack alignItems="center" spacing={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <LabelFields title="Buscar" />
          <TextField
            value={querys}
            onChange={(event) => {
              setQuerys(event.target.value);
            }}
            fullWidth
            size="small"
            placeholder="Pesquise por uma loja"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <LabelFields title="Faturamento mínimo esperado" />
          <TextField
            fullWidth
            size="small"
            value={`R$ ${billing ?? '0.0'}`}
            placeholder="Ex. 15.000,00"
            onChange={(event) => {
              setBilling(VMasker.toMoney(event.target.value));
            }}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ mb: '1rem' }}>
        <Table sx={{ minWidth: 10 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Lojas</TableCell>
              <TableCell align="right">Faturamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stores?.map((store) => (
              <TableRow key={uuidV4()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color:
                      !billing || (!!billing && parseFloat(billing.replace('.', '').replace(',', '.')) <= store.revenue)
                        ? '#000'
                        : '#FF0000'
                  }}
                >
                  {store.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color:
                      !billing || (!!billing && parseFloat(billing.replace('.', '').replace(',', '.')) <= store.revenue)
                        ? '#000'
                        : '#FF0000'
                  }}
                >
                  {store.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} size="small" />
    </Stack>
  );
}
