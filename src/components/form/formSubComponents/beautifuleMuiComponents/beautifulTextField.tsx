import React, { FC } from "react";
import { minWidth } from "../../contactFrom";
import { TextField, TextFieldProps } from "@mui/material";

export const BeautifulTextField: FC<TextFieldProps> = ({
  children,
  ...rest
}) => {
  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth,
        marginBottom: { xs: 2, md: 0 },
        marginRight: { md: 2 },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "primary.dark",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
      }}
      {...rest}
    >
      {children}
    </TextField>
  );
};
