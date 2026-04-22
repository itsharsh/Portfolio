export const personalData = {
  // Architectural Patterns / Mockups for the "Featured Projects" visual 
  architecturePatterns: [
    {
      title: "Cost-Optimized Identity Architecture",
      summary: "Refactored legacy IAM service into JWT-based RBAC, reducing system-wide traffic by 25% and decommissioning redundant microservices.",
      category: "Systems",
      type: "code",
      content: `// Client-Side JWT Validation Strategy (RBAC)\nconst validateAccess = (token) => {\n  const { permissions } = decode(token);\n  return permissions.includes('system:write');\n};`,
      tags: ["AUTH0", "IAM", "JWT", "COST-OPTIMIZATION"]
    },
    {
      title: "Scaled Auth Strategy",
      summary: "Unified authentication experience for multi-brand ecosystem using Auth0 Universal Login and Passwordless flows.",
      category: "Systems",
      type: "visualization",
      tags: ["AUTH0", "PASSWORDLESS", "PHASED-DEPLOYMENT"]
    }
  ],

  // Extra projects user mentioned they are working on, to show in Projects grid until GitConnected is updated
  pendingProjects: [
    {
      name: "Rent Management Android App",
      summary: "A comprehensive rent management application for Android. Features include automated reminders, payment tracking, and multi-property management.",
      category: "Frontend",
      githubUrl: "#",
      languages: ["REACT NATIVE", "ANDROID", "TYPESCRIPT"]
    },
    {
      name: "Insta-Follow-Unfollow",
      summary: "An automated script and utility tool for managing Instagram follower/following ratios safely while bypassing rate limits.",
      category: "Backend",
      githubUrl: "#",
      languages: ["PYTHON", "AUTOMATION", "SELENIUM"]
    }
  ],

  // Extra metadata for grouping skills visually (Eye-catchy grouping)
  skillsExtra: {
    "Identity & Access": ["Auth0", "JWT", "RBAC", "Passwordless Auth", "Universal Login", "SAML/OIDC"],
    "Backend & Systems": ["Golang", "Node.js", "Python", "Microservices Consolidation", "PostgreSQL", "Redis"],
    "Architecture & DevOps": ["System Decommissioning", "Cost Optimization", "Phased Deployment", "CI/CD", "Docker", "Kubernetes"]
  }
};
