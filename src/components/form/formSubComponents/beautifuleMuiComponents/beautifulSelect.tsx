import { Select, SelectChangeEvent } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { minWidth, skills } from "../../contactFrom";

type BeautifulSelectProps = {
  children?: ReactNode;
  value: string[] | undefined | "";
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
};

export const BeautifulSelect: FC<BeautifulSelectProps> = (props) => {
  return (
    <Select
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(", ")}
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
      }}
      multiple
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${skills}px !important`,
            maxHeight: 180,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
};
