import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { FC } from "react";
import { defaultPreference, minWidth } from "../../contactFrom";

type BeautifulRadiosProps = {
  preference: string | undefined;
  handleRadioChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};

export const BeautifulRadios: FC<BeautifulRadiosProps> = ({
  preference,
  handleRadioChange,
}) => {
  return (
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component="legend">Work preference</FormLabel>
      <RadioGroup
        id="preference-type-radio"
        name="preference"
        value={preference}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          control={<Radio />}
          label={defaultPreference}
          value={defaultPreference}
        />
        <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
        <FormControlLabel
          control={<Radio />}
          label="In Office"
          value="In Office"
        />
      </RadioGroup>
    </FormGroup>
  );
};
