import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import results from "./data.js";

export default function EventsTable() {
  const timeConverter = (timestamp) => {
    var a = new Date(timestamp);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid container xs={12} sx={{ display: "flex" }}>
          <Grid xs={2}>
            <Typography style={{ fontWeight: 600 }}>Event Time</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography style={{ fontWeight: 600 }}>Event Name</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography style={{ fontWeight: 600 }}>Status</Typography>
          </Grid>
          <Grid xs={4}>
            <Typography style={{ fontWeight: 600 }}>URL</Typography>
          </Grid>
        </Grid>
        {results.events.map((item) => {
          return (
            <>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container xs={12} sx={{ display: "flex" }}>
                    <Grid xs={2}>
                      <Typography>{timeConverter(item.timestamp)}</Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography>{item.original.event_type}</Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography>Success</Typography>
                    </Grid>
                    <Grid xs={4}>
                      <Typography>{item.original.url}</Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container xs={12} sx={{ display: "flex" }}>
                    <Grid xs={2}>
                      <Typography style={{ fontWeight: 600 }}>Key</Typography>
                    </Grid>
                    <Grid xs={4}>
                      <Typography style={{ fontWeight: 600 }}>Value</Typography>
                    </Grid>
                  </Grid>
                  {Object.keys(item.original).map((key) => {
                    return (
                      <>
                        <Grid container xs={12} sx={{ display: "flex" }}>
                          <Grid xs={2}>
                            <Typography>{key}</Typography>
                          </Grid>
                          <Grid xs={4}>
                            <Typography>
                              {JSON.stringify(item.original[key])}
                            </Typography>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
      </div>
    </>
  );
}
