import React, { FC, useState } from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { contactData, FormValues } from "../../data/contactData";
import dayjs from "dayjs";
import { BeautifulTextField } from "./formSubComponents/beautifuleMuiComponents/beautifulTextField";
import { BeautifulAutoComplete } from "./formSubComponents/beautifuleMuiComponents/beautifulAutoComplete";
import { BeautifulSelect } from "./formSubComponents/beautifuleMuiComponents/beautifulSelect";
import { BeautifulDatePicker } from "./formSubComponents/beautifuleMuiComponents/beautifulDatePicker";
import { BeautifulRadios } from "./formSubComponents/beautifuleMuiComponents/beautifulRadios";

export const skills = [
  "React",
  "Angular",
  "Python",
  "NodeJS",
  "Machine Learning",
];
export const minWidth = 300;

export const defaultPreference = "Work From Home";

const paperInputsStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& fieldset": {
      borderColor: "primary.light",
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export const ContactForm: FC = () => {
  const today = new Date().toLocaleDateString().split("/").reverse().join("/");

  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: ["React"],
      startDate: dayjs(today),
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] =
    useState<FormValues>(getDefaultFormValues);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleChangeDate = (value: dayjs.Dayjs | null) => {
    setFormValues({ ...formValues, startDate: dayjs(value) });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const handleSubmit = () => {
    console.log("submited from", formValues);

    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClear = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues(getDefaultFormValues());
  };

  const handlerAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          ...paperInputsStyle,
          "&:hover": { background: "rgba(0,0,0,0.1)" },
          backgroundColor: "grid.dark",
        }}
      >
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulTextField
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutoComplete
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulSelect
                value={formValues.skills}
                onChange={handleSelectChange}
              >
                {skills.map((skill) => (
                  <MenuItem value={skill} key={skill}>
                    <ListItemText primary={skill} />
                  </MenuItem>
                ))}
              </BeautifulSelect>
              <BeautifulDatePicker
                value={formValues.startDate}
                onChange={handleChangeDate}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />
              <Stack>
                <Button
                  variant="contained"
                  sx={{ height: 56, width: 100 }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  sx={{ height: 56, width: 100 }}
                  variant="beautiful"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handlerAlertClick}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          Form submitted
        </Alert>
      </Dialog>
    </>
  );
};
