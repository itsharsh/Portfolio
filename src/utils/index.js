export const categorizeSkills = (skills) => {
  const groups = {
    "Backend & Architecture": [],
    "Frontend": [],
    "Hardware & IoT": [],
    "Tools & Methodology": [],
    "Other": []
  };

  if (!skills) return groups;

  skills.forEach(skillObj => {
    const name = skillObj.name;
    const lowerName = name.toLowerCase();

    if (lowerName.includes('node') || lowerName.includes('mongo') || lowerName.includes('python') || lowerName.includes('c++') || lowerName.includes('auth') || lowerName.includes('go')) {
      groups["Backend & Architecture"].push(name);
    } else if (lowerName.includes('react') || lowerName.includes('html') || lowerName.includes('css')) {
      groups["Frontend"].push(name);
    } else if (lowerName.includes('iot') || lowerName.includes('robotic') || lowerName.includes('esp') || lowerName.includes('arduino') || lowerName.includes('raspberry')) {
      groups["Hardware & IoT"].push(name);
    } else if (lowerName.includes('agile') || lowerName.includes('git') || lowerName.includes('opencv') || lowerName.includes('image')) {
      groups["Tools & Methodology"].push(name);
    } else {
      groups["Other"].push(name);
    }
  });

  return Object.fromEntries(Object.entries(groups).filter(([_, items]) => items.length > 0));
};

export const formatUrl = (url) => {
  if (!url) return '#';
  if (url.startsWith('http')) return url;
  return `https://${url}`;
};
