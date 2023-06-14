import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { contactData } from "../../data/contactData";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { minWidth } from "../form/contactFrom";

const contactLiHeight = 24;
let maxSkills = 1;

export const ContactCardGrid = () => {
  const [open, setOpen] = useState<boolean>(true);
  const gridAlignProps = open
    ? {}
    : {
        display: "flex",
        justifyContent: "flex-end",
        alineItems: "flex-end",
      };
  const prepareDate = (date: Dayjs | undefined | null) => {
    if (!date) return "Invalid date";
    return date.toDate().toLocaleDateString();
  };
  return (
    <Box m={1}>
      <Button
        sx={{ marginBottom: 3 }}
        variant="contained"
        onClick={() => setOpen((prev) => !prev)}
      >
        Collapse
      </Button>
      <Grid
        container
        spacing={2}
        sx={{ width: 700, backgroundColor: "grid.main" }}
      >
        {contactData.map((contact) => {
          maxSkills =
            (contact.skills?.length || 0) > maxSkills
              ? contact.skills?.length || 0
              : maxSkills;
          return (
            <Grid
              item
              key={contact.id}
              xs={open ? 6 : 12}
              sx={{ ...gridAlignProps }}
            >
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                  }}
                  avatar={
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {contact.name?.substring(0, 1).toUpperCase() || "A"}
                    </Avatar>
                  }
                />
                <Collapse
                  in={open}
                  // timeout={2000} orientation="horizontal"
                >
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLiHeight }}
                  >
                    <Typography>
                      <b>Start Date:</b> {prepareDate(contact.startDate)}
                    </Typography>
                    <Typography>
                      <b>Work Preference:</b> {contact.preference}
                    </Typography>
                    <List
                      sx={{
                        listStyle: "list-item",
                        listStyleType: "circle",
                        paddingLeft: 2,
                      }}
                      subheader={
                        <ListSubheader
                          id="nested-list-subheader"
                          sx={{
                            right: 16,
                            position: "inherit",
                            fontSize: "1.25rem",
                            color: "black",
                            paddingLeft: 0,
                          }}
                        >
                          Skills:
                        </ListSubheader>
                      }
                    >
                      {contact.skills.map((element) => {
                        return (
                          <li
                            style={{
                              paddingTop: 0,
                              paddingLeft: 0,
                              paddingBottom: "2px",
                            }}
                            key={element}
                          >
                            {element}
                          </li>
                        );
                      })}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
