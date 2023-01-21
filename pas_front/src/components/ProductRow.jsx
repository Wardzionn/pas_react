import {
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Box,
  Typography,
  Table,
  TableBody,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import React from "react";

function ProductRow({ item }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{item.type}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.producer}</TableCell>
        <TableCell>{item.productDescription}</TableCell>
        <TableCell>{item.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h6">Details</Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Screen size</TableCell>
                    <TableCell>{item.screenSize}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Resolution</TableCell>
                    <TableCell>{item.resolution}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Panel type</TableCell>
                    <TableCell>{item.panelType}</TableCell>
                  </TableRow>
                  {item.type != "Tv" && (
                    <>
                      <TableRow>
                        <TableCell>C.P.U</TableCell>
                        <TableCell>{item.cpu}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>R.A.M size</TableCell>
                        <TableCell>{item.ramAmount}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Battery size</TableCell>
                        <TableCell>{item.batterySize}</TableCell>
                      </TableRow>
                      {item.type == "MobilePhone" ? (
                        <>
                          <TableRow>
                            <TableCell>Operating system</TableCell>
                            <TableCell>{item.operatingSystem}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>N.F.C</TableCell>
                            <TableCell>{item.nfcPresent.toString()}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Headphone jack</TableCell>
                            <TableCell>
                              {item.audioJackPresent.toString()}
                            </TableCell>
                          </TableRow>
                        </>
                      ) : (
                        <TableRow>
                          <TableCell>Disk size</TableCell>
                          <TableCell>{item.diskSize}</TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ProductRow;
