import dayjs, { Dayjs } from "dayjs";

export type FormValues = {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: Dayjs | null;
  preference?: string;
};
const today = new Date().toLocaleDateString().split("/").reverse().join("/");
export const contactData: FormValues[] = [
  {
    id: 1,
    name: "Sean Spencer",
    role: "Dev",
    skills: ["Angular"],
    startDate: dayjs(today),
    preference: "Work From Home",
  },
  {
    id: 2,
    name: "Burton Guster",
    role: "Dev",
    skills: ["React"],
    startDate: dayjs(today),
    preference: "Work From Home",
  },
  {
    id: 3,
    name: "Juliet O'Hara",
    role: "Dev",
    skills: ["React"],
    startDate: dayjs(today),
    preference: "Work From Home",
  },
  {
    id: 4,
    name: "Lassy",
    role: "Dev",
    skills: ["React"],
    startDate: dayjs(today),
    preference: "Work From Home",
  },
];
