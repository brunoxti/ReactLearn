import * as React from "react";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";
import { FavoriteProducts } from "../../Models/FavoriteProducts";
import { FC } from "react";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { Router } from "@mui/icons-material";
import Link from "@material-ui/core/Link";

interface iProps {
  favoriteProducts: FavoriteProducts | null;
  onBackButton: Function;
  onChangePage: Function;
}

const onChangePageView: FC<iProps> = ({ onChangePage }) => {
  console.log("Passou aqui");
  onChangePage();
  return <></>;
};

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 130, hideable: true },
  { field: "name", headerName: "Nome", width: 130 },
  { field: "price", headerName: "Preço", width: 130 },
  { field: "favorite", headerName: "Favorito", width: 130 },
  {
    field: "action",
    headerName: "Detalhes",
    sortable: false,
    renderCell: (params) => {
      const api: GridApi = params.api;
      const thisRow: Record<string, GridCellValue> = {};

      api
        .getAllColumns()
        .filter((c) => c.field == "_id" && !!c)
        .forEach(
          (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        );

      return (
        <Link href={"/detail/" + thisRow._id}>
          <Button variant="contained" color="secondary">Ir</Button>
        </Link>
      );
    },
  },
];

const FavoriteProductView: FC<iProps> = ({
  favoriteProducts,
  onBackButton,
  onChangePage,
}) => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={favoriteProducts!.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default FavoriteProductView;
