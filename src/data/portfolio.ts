export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Optimizing human activity recognition with inertial sensors",
    description:
      "For my master's thesis, I developed a human activity recognition system using wearable Magnetic Inertial Measurement Units (MIMUs). I compared feature-based and 'raw' inertial data-based classification approaches, evaluating sensor placement, feature selection, and the value of magnetometer data. The final model, using only accelerometer and gyroscope features from 3 optimally placed sensors, achieved an accuracy of 97% and F1-score of 98% on 7 common physical activities.",
    technologies: ["Python", "Sklearn", "Tensorflow"],
    projectUrl: "https://github.com/simonperneel/MAI-Thesis-HAR/",
    codeUrl: "https://github.com/simonperneel/MAI-Thesis-HAR/blob/main/main.py",
  },
];
