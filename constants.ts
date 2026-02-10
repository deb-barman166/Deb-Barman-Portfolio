import { SkillCategory, Project, BlogPost, SkillItem } from './types';

// Helper to map levels to numeric scores for visualization
const LevelMap = {
  'Beginner': 40,
  'Advanced': 75,
  'Expert': 90,
  'Legend': 100
};

export const PERSONAL_INFO = {
  name: "Deb Barman",
  role: "Python Developer & AI Specialist",
  tagline: "Bridging the gap between Human Creativity and Artificial Intelligence.",
  location: "Global",
  email: "deb.barman@example.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://whatsapp.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Stock Predictor",
    description: "A machine learning model leveraging LSTM neural networks to predict stock market trends with 85% accuracy using historical data.",
    tags: ["Python", "TensorFlow", "Pandas", "React"],
    github: "#",
    link: "#"
  },
  {
    title: "Neuro-Visualizer Dashboard",
    description: "Real-time data visualization tool for EEG signals, allowing researchers to monitor brain activity patterns via a web interface.",
    tags: ["D3.js", "Python", "WebSockets", "FastAPI"],
    github: "#",
    link: "#"
  },
  {
    title: "Automated Content Generator",
    description: "A SaaS tool wrapping Gemini API to generate SEO-optimized blog posts and social media captions based on keyword analysis.",
    tags: ["Gemini API", "Next.js", "Tailwind", "Node.js"],
    github: "#",
    link: "#"
  },
  {
    title: "SecureChat Encryption",
    description: "End-to-end encrypted messaging application focusing on zero-knowledge architecture and ephemeral messaging.",
    tags: ["Cryptography", "Python", "Socket.io", "React"],
    github: "#",
    link: "#"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Future of Prompt Engineering",
    excerpt: "Why understanding the nuances of LLM architecture is crucial for crafting the perfect prompt in 2024.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    category: "AI Research"
  },
  {
    title: "Optimizing Python for Speed",
    excerpt: "Advanced techniques in memory management and multi-threading to make your Python scripts run 10x faster.",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    category: "Development"
  },
  {
    title: "Minimalism in UI Design",
    excerpt: "How reducing clutter leads to higher conversion rates and better user retention in modern web apps.",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    category: "Design"
  }
];

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Coding Proficiency",
    description: "Core programming languages and frameworks.",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        score: 85,
        subSkills: [
          // Advanced first
          { name: "Pandas", level: "Advanced", score: 85 },
          { name: "Matplotlib", level: "Advanced", score: 80 },
          { name: "Seaborn", level: "Advanced", score: 80 },
          // Beginner second
          { name: "Numpy", level: "Beginner", score: 45 },
          { name: "Scikit Learn", level: "Beginner", score: 40 },
          { name: "Pygame", level: "Beginner", score: 45 },
          { name: "PyTorch", level: "Beginner", score: 35 },
        ]
      },
      { name: "HTML", level: "Beginner", score: 45 },
      { name: "CSS", level: "Beginner", score: 45 },
      { name: "JavaScript", level: "Beginner", score: 42 },
      { name: "Java", level: "Beginner", score: 38 },
      { name: "C", level: "Beginner", score: 35 },
      { name: "C++", level: "Beginner", score: 35 },
      { name: "C#", level: "Beginner", score: 35 },
      { name: "PHP", level: "Beginner", score: 40 },
      { name: "MySQL", level: "Beginner", score: 40 },
      { name: "SQL", level: "Beginner", score: 40 },
      { name: "JSON", level: "Beginner", score: 48 },
    ]
  },
  {
    title: "Technical & AI Arsenal",
    description: "Tools, Platforms, and Creative Tech.",
    skills: [
      { name: "AI Tools", level: "Expert", score: 95 },
      { name: "ChatGPT", level: "Expert", score: 92 },
      { name: "Prompt Engineering", level: "Advanced", score: 85 },
      { name: "Gemini", level: "Advanced", score: 88 },
      { name: "Google AI Studio", level: "Advanced", score: 82 },
      { name: "Nano Banana 🍌", level: "Advanced", score: 80 },
      { name: "N8N Automation", level: "Advanced", score: 78 },
      { name: "Video Editing", level: "Advanced", score: 85 },
      { name: "Photo Editing", level: "Advanced", score: 85 },
      { name: "AI Image Gen", level: "Advanced", score: 88 },
    ]
  },
  {
    title: "Soft Skills",
    description: "Interpersonal and cognitive abilities.",
    skills: [
      { name: "Creativity", level: "Legend", score: 100 },
      { name: "Observation", level: "Legend", score: 98 },
      { name: "Imagination", level: "Legend", score: 100 },
      { name: "Critical Thinking", level: "Expert", score: 92 },
      { name: "Self Control", level: "Expert", score: 90 },
      { name: "Discipline", level: "Advanced", score: 85 },
      { name: "Problem Solving", level: "Advanced", score: 82 },
      { name: "Decision Making", level: "Advanced", score: 80 },
      { name: "Communication", level: "Beginner", score: 50 },
      { name: "Leadership", level: "Beginner", score: 45 },
    ]
  },
  {
    title: "Habits & Discipline",
    description: "Daily routines that drive success.",
    skills: [
      { name: "Learn New Things", level: "Legend", score: 100 },
      { name: "Play Chess", level: "Expert", score: 95 },
      { name: "Complete Daily Tasks", level: "Expert", score: 92 },
      { name: "Creative Action", level: "Expert", score: 90 },
      { name: "Meditation", level: "Advanced", score: 85 },
      { name: "Reading", level: "Advanced", score: 80 },
    ]
  },
  {
    title: "Knowledge Domains",
    description: "Academic and Intellectual pursuits.",
    skills: [
      { name: "Human Brain Power", level: "Expert", score: 90 },
      { name: "Geography", level: "Advanced", score: 85 },
      { name: "Psychology", level: "Advanced", score: 88 },
      { name: "Electronics", level: "Advanced", score: 82 },
      { name: "Mathematics", level: "Advanced", score: 80 },
      { name: "Science", level: "Advanced", score: 85 },
      { name: "Philosophy", level: "Beginner", score: 50 },
      { name: "History", level: "Beginner", score: 45 },
    ]
  },
  {
    title: "Specialized Skills",
    description: "Unique talents and creative outlets.",
    skills: [
      { name: "Idea Generation", level: "Expert", score: 95 },
      { name: "Deep Thinking", level: "Expert", score: 94 },
      { name: "Electric Circuits", level: "Expert", score: 92 },
      { name: "Book Study with AI", level: "Expert", score: 90 },
      { name: "Gaming (Horror/Survival)", level: "Expert", score: 90 },
      { name: "Visual Diagrams with AI", level: "Advanced", score: 88 },
      { name: "Teaching Friends", level: "Advanced", score: 85 },
      { name: "Easy Explanation", level: "Advanced", score: 85 },
      { name: "Drawing", level: "Advanced", score: 80 },
    ]
  }
];

export const LANGUAGES: SkillItem[] = [
  { name: "Bangla", level: "Legend", score: 100 },
  { name: "English", level: "Advanced", score: 80 },
  { name: "Hindi", level: "Advanced", score: 80 },
];