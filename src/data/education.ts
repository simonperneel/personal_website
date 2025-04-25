export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2020-2021",
    institution: "KU Leuven",
    degree: "Master Artificial Intelligence",
    thesis: "Identification of features for the optimal recognition of physical activities with wearable devices",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2016-2020", 
    institution: "KU Leuven, Campus Ghent",
    degree: "Master Industrial Engineering: Electronics-ICT",
    thesis: "Examination of Low-Power Wide-Area networks for IoT applications",
  },

];
