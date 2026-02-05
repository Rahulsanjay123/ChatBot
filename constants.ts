
import { SkillData } from './types';

export const SKILL_DATASET: SkillData[] = [
  {
    name: "Python",
    category: "Programming",
    currentDemand: 95,
    growthRate: 15,
    topIndustries: ["Tech", "Finance", "Healthcare"],
    description: "The primary language for data science, AI, and backend automation.",
    historicalDemand: [
      { year: 2020, score: 78 }, { year: 2021, score: 84 }, { year: 2022, score: 89 }, { year: 2023, score: 92 }, { year: 2024, score: 95 }
    ]
  },
   {
    name: "C Programming",
    category: "Programming",
    currentDemand: 75,
    growthRate: 6,
    topIndustries: ["Embedded Systems", "Manufacturing", "Operating Systems"],
    description: "Low-level programming language used for system software, embedded systems, and performance-critical applications.",
    historicalDemand: [
      { year: 2020, score: 70 },
      { year: 2021, score: 72 },
      { year: 2022, score: 73 },
      { year: 2023, score: 74 },
      { year: 2024, score: 75 }
    ]
  },

  {
    name: "C++ Programming",
    category: "Programming",
    currentDemand: 82,
    growthRate: 10,
    topIndustries: ["Game Development", "Finance", "High-Performance Computing"],
    description: "High-performance programming language used in game engines, financial systems, and real-time applications.",
    historicalDemand: [
      { year: 2020, score: 68 },
      { year: 2021, score: 72 },
      { year: 2022, score: 76 },
      { year: 2023, score: 79 },
      { year: 2024, score: 82 }
    ]
  },

  {
    name: "Java",
    category: "Programming",
    currentDemand: 90,
    growthRate: 12,
    topIndustries: ["Enterprise Software", "Banking", "Android Development"],
    description: "Object-oriented programming language widely used for enterprise systems, backend services, and Android apps.",
    historicalDemand: [
      { year: 2020, score: 80 },
      { year: 2021, score: 83 },
      { year: 2022, score: 86 },
      { year: 2023, score: 88 },
      { year: 2024, score: 90 }
    ]
  },

  {
    name: "Selenium Automation",
    category: "Testing",
    currentDemand: 85,
    growthRate: 16,
    topIndustries: ["IT Services", "E-commerce", "SaaS"],
    description: "Automated testing framework for validating web applications across browsers.",
    historicalDemand: [
      { year: 2020, score: 60 },
      { year: 2021, score: 68 },
      { year: 2022, score: 75 },
      { year: 2023, score: 81 },
      { year: 2024, score: 85 }
    ]
  },

  {
    name: "Playwright",
    category: "Testing",
    currentDemand: 80,
    growthRate: 35,
    topIndustries: ["SaaS", "Startups", "Web Development"],
    description: "Modern end-to-end testing framework for fast, reliable testing of web applications.",
    historicalDemand: [
      { year: 2020, score: 20 },
      { year: 2021, score: 35 },
      { year: 2022, score: 55 },
      { year: 2023, score: 70 },
      { year: 2024, score: 80 }
    ]
  },
  {
    name: "Generative AI",
    category: "AI/ML",
    currentDemand: 98,
    growthRate: 140,
    topIndustries: ["Tech", "Creative Arts", "Consulting"],
    description: "Expertise in LLMs, Prompt Engineering, and AI application development.",
    historicalDemand: [
      { year: 2020, score: 5 }, { year: 2021, score: 12 }, { year: 2022, score: 25 }, { year: 2023, score: 85 }, { year: 2024, score: 98 }
    ]
  },
  {
    name: "Cloud Computing",
    category: "Infrastructure",
    currentDemand: 88,
    growthRate: 10,
    topIndustries: ["Tech", "E-commerce", "Government"],
    description: "AWS, Azure, and Google Cloud platform management and architecture.",
    historicalDemand: [
      { year: 2020, score: 70 }, { year: 2021, score: 75 }, { year: 2022, score: 80 }, { year: 2023, score: 84 }, { year: 2024, score: 88 }
    ]
  },
  {
    name: "Cybersecurity",
    category: "Security",
    currentDemand: 92,
    growthRate: 22,
    topIndustries: ["Banking", "Defense", "Infrastructure"],
    description: "Protecting systems from digital attacks and managing data privacy.",
    historicalDemand: [
      { year: 2020, score: 60 }, { year: 2021, score: 72 }, { year: 2022, score: 82 }, { year: 2023, score: 88 }, { year: 2024, score: 92 }
    ]
  },
  {
    name: "DevOps",
    category: "Infrastructure",
    currentDemand: 85,
    growthRate: 18,
    topIndustries: ["Tech", "SaaS", "FinTech"],
    description: "Bridging software development and IT operations for rapid deployment.",
    historicalDemand: [
      { year: 2020, score: 55 }, { year: 2021, score: 62 }, { year: 2022, score: 70 }, { year: 2023, score: 78 }, { year: 2024, score: 85 }
    ]
  },
  {
    name: "Data Engineering",
    category: "Data Science",
    currentDemand: 90,
    growthRate: 25,
    topIndustries: ["Big Data", "Retail", "Marketing"],
    description: "Building robust data pipelines and architecture for analytics.",
    historicalDemand: [
      { year: 2020, score: 50 }, { year: 2021, score: 60 }, { year: 2022, score: 72 }, { year: 2023, score: 82 }, { year: 2024, score: 90 }
    ]
  },
  {
    name: "Blockchain Development",
    category: "Programming",
    currentDemand: 72,
    growthRate: 45,
    topIndustries: ["Finance", "Supply Chain", "Gaming"],
    description: "Smart contracts, dApps, and decentralized protocol creation.",
    historicalDemand: [
      { year: 2020, score: 30 }, { year: 2021, score: 45 }, { year: 2022, score: 60 }, { year: 2023, score: 68 }, { year: 2024, score: 72 }
    ]
  },
  {
    name: "UI/UX Design",
    category: "Design",
    currentDemand: 82,
    growthRate: 12,
    topIndustries: ["Mobile Apps", "Web Services", "Advertising"],
    description: "Human-centered interface design and user experience research.",
    historicalDemand: [
      { year: 2020, score: 65 }, { year: 2021, score: 70 }, { year: 2022, score: 74 }, { year: 2023, score: 78 }, { year: 2024, score: 82 }
    ]
  },
  {
    name: "Digital Marketing",
    category: "Business",
    currentDemand: 78,
    growthRate: 8,
    topIndustries: ["Retail", "B2B", "Entertainment"],
    description: "SEO, SEM, and performance-based digital growth strategies.",
    historicalDemand: [
      { year: 2020, score: 68 }, { year: 2021, score: 70 }, { year: 2022, score: 73 }, { year: 2023, score: 75 }, { year: 2024, score: 78 }
    ]
  },
  {
    name: "Sustainability Management",
    category: "Business",
    currentDemand: 65,
    growthRate: 35,
    topIndustries: ["Energy", "Manufacturing", "NGO"],
    description: "ESG reporting and corporate social responsibility implementation.",
    historicalDemand: [
      { year: 2020, score: 20 }, { year: 2021, score: 28 }, { year: 2022, score: 40 }, { year: 2023, score: 55 }, { year: 2024, score: 65 }
    ]
  },
  {
    name: "Communication Skills",
    category: "Soft Skills",
    currentDemand: 95,
    growthRate: 18,
    topIndustries: ["Corporate", "Education", "Customer Service"],
    description: "Ability to clearly convey ideas, information, and emotions verbally and in writing.",
    historicalDemand: [
      { year: 2020, score: 70 },
      { year: 2021, score: 78 },
      { year: 2022, score: 85 },
      { year: 2023, score: 90 },
      { year: 2024, score: 95 }
    ]
  },

  {
    name: "Leadership",
    category: "Management",
    currentDemand: 88,
    growthRate: 20,
    topIndustries: ["IT", "Manufacturing", "Healthcare"],
    description: "Guiding teams, making decisions, and motivating employees to achieve goals.",
    historicalDemand: [
      { year: 2020, score: 60 },
      { year: 2021, score: 68 },
      { year: 2022, score: 75 },
      { year: 2023, score: 82 },
      { year: 2024, score: 88 }
    ]
  },

  {
    name: "Problem Solving",
    category: "Soft Skills",
    currentDemand: 90,
    growthRate: 19,
    topIndustries: ["IT", "Consulting", "Finance"],
    description: "Analyzing situations and developing effective solutions for complex challenges.",
    historicalDemand: [
      { year: 2020, score: 65 },
      { year: 2021, score: 72 },
      { year: 2022, score: 80 },
      { year: 2023, score: 86 },
      { year: 2024, score: 90 }
    ]
  },

  {
    name: "Time Management",
    category: "Productivity",
    currentDemand: 85,
    growthRate: 15,
    topIndustries: ["Corporate", "Freelancing", "Education"],
    description: "Planning and controlling time effectively to increase productivity and efficiency.",
    historicalDemand: [
      { year: 2020, score: 58 },
      { year: 2021, score: 65 },
      { year: 2022, score: 72 },
      { year: 2023, score: 79 },
      { year: 2024, score: 85 }
    ]
  },

  {
    name: "Teamwork & Collaboration",
    category: "Soft Skills",
    currentDemand: 92,
    growthRate: 17,
    topIndustries: ["IT", "Healthcare", "Corporate"],
    description: "Working effectively with others to achieve common goals.",
    historicalDemand: [
      { year: 2020, score: 68 },
      { year: 2021, score: 75 },
      { year: 2022, score: 82 },
      { year: 2023, score: 88 },
      { year: 2024, score: 92 }
    ]
  },

  {
    name: "Emotional Intelligence",
    category: "Personal Development",
    currentDemand: 87,
    growthRate: 21,
    topIndustries: ["Management", "Healthcare", "HR"],
    description: "Understanding and managing emotions to improve relationships and decision-making.",
    historicalDemand: [
      { year: 2020, score: 55 },
      { year: 2021, score: 63 },
      { year: 2022, score: 72 },
      { year: 2023, score: 80 },
      { year: 2024, score: 87 }
    ]
  },
   {
    name: "Machine Learning Engineering",
    category: "AI/ML",
    currentDemand: 93,
    growthRate: 30,
    topIndustries: ["Tech", "Healthcare", "Finance"],
    description: "Designing, training, and deploying machine learning models in production systems.",
    historicalDemand: [
      { year: 2020, score: 50 },
      { year: 2021, score: 65 },
      { year: 2022, score: 78 },
      { year: 2023, score: 87 },
      { year: 2024, score: 93 }
    ]
  },

  {
    name: "Data Analytics",
    category: "Data Science",
    currentDemand: 86,
    growthRate: 16,
    topIndustries: ["Retail", "Finance", "Healthcare"],
    description: "Analyzing structured data to extract insights and support decision-making.",
    historicalDemand: [
      { year: 2020, score: 62 },
      { year: 2021, score: 70 },
      { year: 2022, score: 77 },
      { year: 2023, score: 82 },
      { year: 2024, score: 86 }
    ]
  },

  {
    name: "Product Management",
    category: "Business",
    currentDemand: 84,
    growthRate: 14,
    topIndustries: ["Tech", "SaaS", "E-commerce"],
    description: "Defining product vision, managing roadmaps, and coordinating cross-functional teams.",
    historicalDemand: [
      { year: 2020, score: 60 },
      { year: 2021, score: 68 },
      { year: 2022, score: 75 },
      { year: 2023, score: 80 },
      { year: 2024, score: 84 }
    ]
  },

  {
    name: "Business Analytics",
    category: "Business",
    currentDemand: 80,
    growthRate: 13,
    topIndustries: ["Consulting", "Finance", "Retail"],
    description: "Using data analysis to improve business processes and strategies.",
    historicalDemand: [
      { year: 2020, score: 58 },
      { year: 2021, score: 65 },
      { year: 2022, score: 72 },
      { year: 2023, score: 77 },
      { year: 2024, score: 80 }
    ]
  },

  {
    name: "Critical Thinking",
    category: "Soft Skills",
    currentDemand: 89,
    growthRate: 17,
    topIndustries: ["IT", "Consulting", "Education"],
    description: "Evaluating information logically to make reasoned and well-informed decisions.",
    historicalDemand: [
      { year: 2020, score: 64 },
      { year: 2021, score: 71 },
      { year: 2022, score: 78 },
      { year: 2023, score: 84 },
      { year: 2024, score: 89 }
    ]
  },

  {
    name: "Adaptability & Flexibility",
    category: "Soft Skills",
    currentDemand: 91,
    growthRate: 22,
    topIndustries: ["Tech", "Startups", "Healthcare"],
    description: "Ability to adjust quickly to new environments, technologies, and challenges.",
    historicalDemand: [
      { year: 2020, score: 60 },
      { year: 2021, score: 70 },
      { year: 2022, score: 80 },
      { year: 2023, score: 86 },
      { year: 2024, score: 91 }
    ]
  },

  {
    name: "Project Management",
    category: "Management",
    currentDemand: 87,
    growthRate: 16,
    topIndustries: ["Construction", "IT", "Consulting"],
    description: "Planning, executing, and delivering projects within scope, time, and budget.",
    historicalDemand: [
      { year: 2020, score: 63 },
      { year: 2021, score: 70 },
      { year: 2022, score: 77 },
      { year: 2023, score: 83 },
      { year: 2024, score: 87 }
    ]
  },

  {
    name: "Ethical Hacking",
    category: "Security",
    currentDemand: 83,
    growthRate: 28,
    topIndustries: ["Cybersecurity", "Banking", "Government"],
    description: "Identifying vulnerabilities in systems to strengthen security defenses.",
    historicalDemand: [
      { year: 2020, score: 48 },
      { year: 2021, score: 58 },
      { year: 2022, score: 68 },
      { year: 2023, score: 76 },
      { year: 2024, score: 83 }
    ]
  },
  {
    name: "Natural Language Processing (NLP)",
    category: "AI/ML",
    currentDemand: 91,
    growthRate: 32,
    topIndustries: ["Tech", "Healthcare", "Customer Support"],
    description: "Building systems that understand, analyze, and generate human language.",
    historicalDemand: [
      { year: 2020, score: 45 },
      { year: 2021, score: 58 },
      { year: 2022, score: 72 },
      { year: 2023, score: 84 },
      { year: 2024, score: 91 }
    ]
  },

  {
    name: "Computer Vision",
    category: "AI/ML",
    currentDemand: 88,
    growthRate: 28,
    topIndustries: ["Autonomous Vehicles", "Healthcare", "Security"],
    description: "Enabling machines to interpret and process visual data from images and videos.",
    historicalDemand: [
      { year: 2020, score: 40 },
      { year: 2021, score: 55 },
      { year: 2022, score: 68 },
      { year: 2023, score: 80 },
      { year: 2024, score: 88 }
    ]
  },

  {
    name: "Full Stack Development",
    category: "Programming",
    currentDemand: 89,
    growthRate: 14,
    topIndustries: ["Tech", "Startups", "E-commerce"],
    description: "Developing both frontend and backend components of web applications.",
    historicalDemand: [
      { year: 2020, score: 65 },
      { year: 2021, score: 72 },
      { year: 2022, score: 79 },
      { year: 2023, score: 85 },
      { year: 2024, score: 89 }
    ]
  },

  {
    name: "Mobile App Development",
    category: "Programming",
    currentDemand: 84,
    growthRate: 12,
    topIndustries: ["Mobile Apps", "E-commerce", "Entertainment"],
    description: "Designing and building mobile applications for Android and iOS platforms.",
    historicalDemand: [
      { year: 2020, score: 62 },
      { year: 2021, score: 69 },
      { year: 2022, score: 75 },
      { year: 2023, score: 80 },
      { year: 2024, score: 84 }
    ]
  },

  {
    name: "Supply Chain Management",
    category: "Business",
    currentDemand: 79,
    growthRate: 16,
    topIndustries: ["Manufacturing", "Logistics", "Retail"],
    description: "Managing the flow of goods, services, and information across organizations.",
    historicalDemand: [
      { year: 2020, score: 55 },
      { year: 2021, score: 62 },
      { year: 2022, score: 69 },
      { year: 2023, score: 74 },
      { year: 2024, score: 79 }
    ]
  },

  {
    name: "Financial Analysis",
    category: "Finance",
    currentDemand: 82,
    growthRate: 11,
    topIndustries: ["Banking", "Investment", "Corporate"],
    description: "Evaluating financial data to support budgeting, forecasting, and investments.",
    historicalDemand: [
      { year: 2020, score: 60 },
      { year: 2021, score: 66 },
      { year: 2022, score: 72 },
      { year: 2023, score: 78 },
      { year: 2024, score: 82 }
    ]
  },

  {
    name: "Negotiation Skills",
    category: "Soft Skills",
    currentDemand: 86,
    growthRate: 18,
    topIndustries: ["Sales", "Business Development", "HR"],
    description: "Reaching mutually beneficial agreements through effective communication.",
    historicalDemand: [
      { year: 2020, score: 59 },
      { year: 2021, score: 66 },
      { year: 2022, score: 73 },
      { year: 2023, score: 80 },
      { year: 2024, score: 86 }
    ]
  },

  {
    name: "Conflict Resolution",
    category: "Soft Skills",
    currentDemand: 83,
    growthRate: 17,
    topIndustries: ["Corporate", "Healthcare", "Education"],
    description: "Managing and resolving disagreements constructively in professional environments.",
    historicalDemand: [
      { year: 2020, score: 56 },
      { year: 2021, score: 63 },
      { year: 2022, score: 70 },
      { year: 2023, score: 77 },
      { year: 2024, score: 83 }
    ]
  }
];

export const CATEGORIES = ["Programming", "AI/ML", "Infrastructure", "Security", "Data Science", "Design", "Business"];
