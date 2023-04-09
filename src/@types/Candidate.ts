export interface Candidate {
  id: string;
  name: string;
  email: string;
  birth_date: string;
  position_applied: string;
  application_date: string;
  status: string; // "waiting" can be ENUM of types statuses
  year_of_experience: number;
}
