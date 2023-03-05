import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function MyDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button
          className="d-flex gap-2 p-2 text-white bg-primary fw-bold"
          variant="outlined"
          onClick={handleClickOpen}
        >
          <i className="fa-solid fa-location-dot fs-4"></i> Location
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Delivery address"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <iframe
                style={{ width: "500px", height: "400px" }}
                title="title"
                src="https://www.google.com/maps/d/embed?mid=1aWSWCFcxK1EX6-f31JeWOV3pmaeDVig&ehbc=2E312F"
              ></iframe>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
