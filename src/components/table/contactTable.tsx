// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableContainer,
// } from "@mui/material";
// import { contactData } from "../../data/contactData";
// import { Dayjs } from "dayjs";

// export const ContactTable = () => {
//   const prepareDate = (date: Dayjs | undefined | null) => {
//     if (!date) return "Invalid date";
//     return date.toDate().toLocaleDateString();
//   };

//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Role</TableCell>
//             <TableCell>Skills</TableCell>
//             <TableCell>Start Date</TableCell>
//             <TableCell>Preference</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {contactData.map((contact) => {
//             return (
//               <TableRow key={contact.name}>
//                 {Object.entries(contact).map(([key, value], index) => {
//                   if (key === "skills") {
//                     if (!Array.isArray(value)) return "No data";
//                     return <TableCell key={index}>{value}</TableCell>;
//                   } else if (key === "startDate") {
//                     return (
//                       <TableCell key={index}>{prepareDate(value)}</TableCell>
//                     );
//                   } else if (key !== "id") {
//                     if (typeof value !== "string") return "ads";
//                     return <TableCell key={index}>{value}</TableCell>;
//                   }
//                   return "";
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { contactData } from "../../data/contactData";
import { Dayjs } from "dayjs";

const borderColor = {
  borderBottomColor: "primary.main",
};

export const ContactTable = () => {
  const prepareDate = (date: string | number | Dayjs | string[] | null) => {
    if (!date || Array.isArray(date) || typeof date === "number")
      return "Invalid date";
    return new Date(date.toString()).toLocaleDateString();
  };
  return (
    <TableContainer
      sx={{
        borderRadius: 1,
        boxShadow: 4,
        margin: 1,
        width: "calc(100% - 16px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "grid.main",
              borderBottomColor: "primary.main",
            }}
          >
            <TableCell sx={{ ...borderColor, width: "30%" }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: "17%" }}>
              Start date
            </TableCell>
            <TableCell sx={{ ...borderColor, width: "19%" }}>
              Preference
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => (
            <TableRow key={contact.id}>
              {Object.entries(contact).map(([key, value]) => {
                if (key === "skills") {
                  if (!Array.isArray(value)) return "No data";
                  return (
                    <TableCell sx={{ ...borderColor }} key={contact.id + key}>
                      {value}
                    </TableCell>
                  );
                } else if (key === "startDate") {
                  return (
                    <TableCell key={contact.id + key} sx={{ ...borderColor }}>
                      {prepareDate(value)}
                    </TableCell>
                  );
                }
                if (key === "name") {
                  if (typeof value !== "string") return "Invalid id";
                  return (
                    <TableCell
                      sx={{
                        ...borderColor,
                        backgroundColor: "primary.light",
                        cursor: "pointer",
                      }}
                      key={contact.id + key}
                      onClick={(event: React.MouseEvent<HTMLElement>) => {
                        alert((event.target as Element).innerHTML);
                      }}
                    >
                      {value}
                    </TableCell>
                  );
                }
                if (key !== "id") {
                  if (typeof value !== "string") return "Invalid id";
                  return (
                    <TableCell sx={{ ...borderColor }} key={contact.id + key}>
                      {value}
                    </TableCell>
                  );
                }
                return "";
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
