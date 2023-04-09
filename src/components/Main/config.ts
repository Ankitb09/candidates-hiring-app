export interface HeadingShape {
  label: string;
  key: string;
  sortable: boolean;
  filterable: boolean;
}

export const Headings: Array<HeadingShape> = [
  {
    label: "Name",
    key: "name",
    sortable: false,
    filterable: true,
  },
  {
    label: "Email",
    key: "email",
    sortable: false,
    filterable: false,
  },
  {
    label: "Age",
    key: "birth_date",
    sortable: false,
    filterable: false,
  },
  {
    label: "Years of Experience",
    key: "year_of_experience",
    sortable: true,
    filterable: false,
  },
  {
    label: "Position Applied",
    key: "position_applied",
    sortable: true,
    filterable: true,
  },
  {
    label: "Date of Application",
    key: "application_date",
    sortable: true,
    filterable: false,
  },
  {
    label: "Status",
    key: "status",
    sortable: false,
    filterable: true,
  },
];
