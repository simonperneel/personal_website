export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Simon Perneel",
  email: "simon.perneel@ugent.be",
  title: "Ph.D. Candidate",
  institution: "Imec-mict-UGent'",
  // Note that links work in the description
  description:
    "I am a researcher at <a href='https://www.ugent.be/mict/en'>Imec-mict-UGent</a>, focusing on analyzing smartphone logdata.  to predict moods and stress levels from smartphone use patterns. I am responsible for the <a href=https://mobiledna.ugent.be>MobileDNA</a>-project, a research tool used to get insights in smartphone use.", 
  imageUrl:
    "https://www.ugent.be/mict/img/fotos-teammembers/mieja_fotografie-imecugent140.jpg/@@images/79ebda1a-7597-4c7b-9483-31f5fba65aae.jpeg",
  googleScholarUrl: "https://scholar.google.be/citations?user=H3PgQakAAAAJ&hl=en",
  githubUsername: "simonperneel",
  linkedinUsername: "simonperneel",
  cvUrl: "https://",
  institutionUrl: "https://www.ugent.be/mict/en",

  // altName: "",
  secretDescription: "I also like to run. And cycle. And swim. Basically, I like being outside and explore the world.",
};
