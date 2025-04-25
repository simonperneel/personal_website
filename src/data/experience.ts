export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2021-2025",
    title: "Data engineer/scientist",
    company: "Imec-mict-UGent",
    description:
      "Looking for patterns in people's smartphone behavior and use of apps. Investigating whether smartphone use can be a predictor for ones (digital) wellbeing (stress, headaches, moods, online vigilance). Responsible for the MobileDNA research tool. MobileDNA is an app developed by imec-mict-UGent to monitor people's smartphone usage.",
    companyUrl: "https://mobiledna.ugent.be",
  },
];
