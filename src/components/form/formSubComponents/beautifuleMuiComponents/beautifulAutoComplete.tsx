import { Autocomplete, TextField } from "@mui/material";
import React, { FC } from "react";
import { minWidth } from "../../contactFrom";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

type BeautifulAutoCompleteProps = {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
};

export const BeautifulAutoComplete: FC<BeautifulAutoCompleteProps> = ({
  onInputChange,
  value,
}) => {
  return (
    <Autocomplete
      value={value}
      onInputChange={onInputChange}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      options={roles}
      sx={{ minWidth }}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            {...params}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.dark",
              },
            }}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option: any) => {
        return <li {...props}>{option}</li>;
      }}
    />
  );
};
