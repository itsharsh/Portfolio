import data from "./data.json";
export const Personal = data.subtopics.find((e) => e.title === "Personal");
export const Experience = data.subtopics.find((e) => e.title === "Experience");
export const Projects = data.subtopics.find((e) => e.title === "Projects");
export const Skills = data.subtopics.find((e) => e.title === "Skills");
export const Achievements = data.subtopics.find(
  (e) => e.title === "Achievements"
);
