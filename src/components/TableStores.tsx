import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
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
} from "@mui/material";
import useStores from "../hooks/useStore";

export default function TableStores() {
  const [page, setPage] = useState<number>(1);
  const { stores, billing } = useStores();
  const pageLimit = 11;

  return (
    <Stack alignItems="center" spacing={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Lojas</TableCell>
              <TableCell align="right">Faturamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stores
              ?.slice((page - 1) * pageLimit, page * pageLimit)
              .map((store) => (
                <TableRow
                  key={uuidV4()}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor:
                      !billing ||
                      (!!billing &&
                        parseFloat(
                          billing.replace(".", "").replace(",", ".")
                        ) <= store.revenue)
                        ? "#ffffff"
                        : "#ffebeb",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color:
                        !billing ||
                        (!!billing &&
                          parseFloat(
                            billing.replace(".", "").replace(",", ".")
                          ) <= store.revenue)
                          ? "#000"
                          : "#FF0000",
                    }}
                  >
                    {store.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color:
                        !billing ||
                        (!!billing &&
                          parseFloat(
                            billing.replace(".", "").replace(",", ".")
                          ) <= store.revenue)
                          ? "#000"
                          : "#FF0000",
                    }}
                  >
                    {store.revenue}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ mb: "1rem" }}
        count={Math.ceil(stores.length / pageLimit)}
        onChange={(_, value) => setPage(value)}
        page={page}
        size="small"
      />
    </Stack>
  );
}
