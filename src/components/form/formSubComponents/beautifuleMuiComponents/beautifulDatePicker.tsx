import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { FC } from "react";
import { minWidth } from "../../contactFrom";

type BeautifulDatePickerProps = {
  value: Dayjs | null | undefined;
  onChange: (value: dayjs.Dayjs | null) => void;
};

export const BeautifulDatePicker: FC<BeautifulDatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker label="Date" {...props} sx={{ minWidth }} />
    </LocalizationProvider>
  );
};
