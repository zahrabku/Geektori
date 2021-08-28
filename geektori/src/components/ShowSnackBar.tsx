import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { FC } from "react";
import { useData } from "../context";

const ShowSnackBar: FC = () => {
    const Data=useData()!;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={Data.openSnackBar}
      autoHideDuration={2000}
      onClose={Data.handleCloseSnackBar}
    >
      <MuiAlert elevation={6} variant="filled" severity="success">
          محصول با موفقیت به سبد خرید اضافه شد.
      </MuiAlert>
    </Snackbar>
  );
};

export default ShowSnackBar;
