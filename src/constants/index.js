import { per2, per3, per4, per5, per6, per7 } from "../assets/images";
import {
  Users,
  Code,
  Brain,
  Rocket,
  CheckCircle,
  Award,
  Zap,
  Laptop,
  Database,
  Clock,
  BookOpen,
  Globe,
} from "lucide-react";
export const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Courses", href: "/courses" },
  { title: "Contact", href: "/contact" },
];
export const features = [
  {
    id: "feature-1",
    icon: Code,
    title: "Online Courses",
    content:
      "Self-paced, in-depth courses designed to build your skills and knowledge at your convenience.",
  },
  {
    id: "feature-2",
    icon: Users,
    title: "Career Mentoring",
    content:
      "Personalized career guidance to help you achieve your professional goals and land your dream job.",
  },
  {
    id: "feature-3",
    icon: Rocket,
    title: "Live Webinars",
    content:
      "Interactive sessions led by industry experts to provide real-world insights and hands-on skills.",
  },
  {
    id: "feature-4",
    icon: Brain,
    title: "Professional Certifications",
    content:
      "Recognized certifications to validate your expertise and boost your career prospects.",
  },
];
export const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "Spondias transformed my career completely. The AI course was incredibly comprehensive and the mentorship was invaluable. I landed my dream job within 3 months of completion!",
    name: "Abdalla Ahmed",
    role: "Software Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    rating: 4,
    quote:
      "The quality of instruction and hands-on projects exceeded my expectations. The expert guidance helped me transition from marketing to data science seamlessly.",
    name: "Fatima Omar",
    role: "Data Scientist",
    avatar:
      per5
  },
  {
    id: 3,
    rating: 5,
    quote:
      "The hands-on projects and real-world applications were invaluable. I gained skills that directly contributed to my job success.",
    name: "Mohamed Abdullah",
    role: "Cybersecurity Specialist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "The practical approach and real-world projects made all the difference. I built a portfolio that impressed employers and secured multiple job offers.",
    name: "Aisha Osman",
    role: "Web Developer",
    avatar: per6
  },
];

export const whyChoose = [
  {
    icon: CheckCircle,
    title: "Industry-Relevant Curriculum",
    description:
      "Our courses are designed in collaboration with industry experts",
  },
  {
    icon: Award,
    title: "Experienced Instructors",
    description: "Learn from professionals with years of real-world experience",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a network of like-minded learners and alumni",
  },
  {
    icon: Zap,
    title: "Hands-On Learning",
    description: "Gain practical skills through project-based assignments",
  },
];

export const courses = [
  {
    id: 1,
    title: "Introduction to Data Analytics",
    slug: "introduction-to-data-analytics",
    description:
      "Learn the basics of data analytics for free, including Python, in this short introductory course.",
    icon: Database,
    startDate: "September 1, 2025",
    iconBg: "bg-gradient-to-br from-purple-500 to-blue-600",
    badge: { text: "NEW", type: "new" },
    tags: ["Data", "Python"],
    duration: "2 weeks",
    level: "Beginner",
    rating: 4.7,
    financing: null,
    price: "4,319.92",
    discountPrice: "3,239.92 ",
    taglineBadge: "DATA FUNDAMENTALS",
    highlights: [
      { icon: Clock, text: "2 Weeks", subText: "Self-paced" },
      { icon: BookOpen, text: "5h / week", subText: "Flexible Learning" },
      { icon: Globe, text: "Online", subText: "Accessible Anywhere" },
    ],
    programFeatures: {
      title: "Foundational Learning",
      description: "Build a strong base in data concepts.",
      points: [
        "No prior experience needed",
        "Hands-on Python exercises",
        "Expert-curated content",
        "Pathway to advanced courses",
      ],
    },
    curriculum: {
      courseOverview: {
        fullDescription:
          "Dive into the world of data with this free two-week introduction. You'll learn fundamental data concepts, basic data manipulation using Python, and how to derive initial insights from datasets. This course is perfect for those considering a career in data science or analytics.",
        nextStartDate: "Ongoing Enrollment",
        courseFormat: "Self-paced online",
        timeCommitment: "5 hours / week",
        prerequisites: "None",
      },
      courseStructure: {
        headline: "Foundations of Data Analytics",
        subDescription:
          "Get started with the essential concepts and tools for data analysis.",
        modules: [
          {
            title: "Week 1: Data Fundamentals",
            description: "Understand what data is and how it's used.",
            topics: ["Data Types", "Data Sources", "Introduction to Analytics"],
          },
          {
            title: "Week 2: Basic Data Manipulation with Python",
            description: "Start cleaning and analyzing data.",
            topics: [
              "Python Basics",
              "Pandas for DataFrames",
              "Simple Data Cleaning",
            ],
          },
        ],
      },
      learningOutcomes: {
        headline: "What You'll Achieve",
        description: "Upon completion, you will be able to:",
        outcomes: [
          "Define key data analytics terms",
          "Perform basic data operations in Python",
          "Identify different types of data",
          "Understand the data analysis workflow",
        ],
      },
    },
    specialFeatures: [
      "No prior data experience required",
      "Hands-on Python exercises",
      "Covers essential data concepts",
      "Pathway to advanced data courses",
    ],
  },
  {
    id: 2,
    title: "Foundations of Data Analytics & AI: No Code",
    slug: "foundations-of-data-analytics-ai-no-code",
    description:
      "This 10 week, part-time course will take you from complete beginner to data practitioner, growing your data analysis and visualisation expertise using Power BI.",
    icon: Brain,
    iconBg: "bg-gradient-to-br from-green-400 to-cyan-500",
    badge: { text: "NEW", type: "new" },
    tags: ["AI", "Data", "Corporate Training"],
    duration: "10 weeks",
    level: "Beginner",
    rating: 4.9,
       price: "2,893.34",
    discountPrice: "2,314.44",
    financing: null,
    startDate: "August 10, 2025",
    taglineBadge: "NO-CODE AI & DATA",
    highlights: [
      { icon: Clock, text: "10 Weeks", subText: "Part-time" },
      { icon: BookOpen, text: "6-8h / week", subText: "Flexible Schedule" },
      { icon: Globe, text: "Live Remote", subText: "Interactive Sessions" },
    ],
    programFeatures: {
      title: "Empowering No-Code Skills",
      description: "Leverage powerful tools without coding.",
      points: [
        "Master Power BI",
        "Practical visualization skills",
        "Real-world case studies",
        "Beginner-friendly approach",
      ],
    },
    curriculum: {
      courseOverview: {
        fullDescription:
          "Become proficient in data analysis and visualization without writing a single line of code. This 10-week part-time course focuses on practical skills using industry-standard tools like Power BI, enabling you to derive insights and create compelling reports for business decision-making. Ideal for professionals looking to leverage data without a coding background.",
        duration: "10 weeks, part-time",
        nextStartDate: "December 15, 2025",

        courseFormat: "Live remote & self-paced",
        timeCommitment: "6-8 hours / week",
        prerequisites: "None",
      },
      courseStructure: {
        headline: "Building Data Expertise without Code",
        subDescription:
          "Master no-code data tools for powerful analytics and visualization.",
        modules: [
          {
            title: "Module 1: Introduction to Data & Power BI",
            description:
              "Get started with data concepts and the Power BI interface.",
            topics: [
              "Data Concepts",
              "Power BI Desktop Tour",
              "Importing Data",
              "Basic ETL Principles",
            ],
          },
          {
            title: "Module 2: Data Modeling & Transformation",
            description: "Prepare your data for analysis.",
            topics: [
              "Data Cleaning",
              "Relationships & Joins",
              "DAX Basics",
              "Data Governance",
            ],
          },
          {
            title: "Module 3: Creating Interactive Dashboards",
            description: "Build compelling visualizations.",
            topics: [
              "Visualization Types",
              "Dashboard Design",
              "Interactivity",
              "Storytelling with Data",
            ],
          },
        ],
      },
      learningOutcomes: {
        headline: "Achieve These Skills",
        description: "By the end of this course, you will be able to:",
        outcomes: [
          "Clean and transform data for analysis",
          "Create robust data models in Power BI",
          "Design interactive and insightful dashboards",
          "Present data effectively to stakeholders",
          "Understand basic AI concepts in business",
        ],
      },
    },
    specialFeatures: [
      "No coding required",
      "Master Power BI for data visualization",
      "Practical, project-based learning",
      "Suitable for business professionals",
    ],
  },
  {
    id: 3,
    title: "Diploma in Full Stack Software Development",
    slug: "diploma-in-full-stack-software-development",
    description:
      "Become a professional software developer specialising in eCommerce, Advanced Front-End or Predictive Analytics.",
    icon: Laptop,
    iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
    badge: null,
    tags: ["AI", "Data", "Full Stack"],
    duration: "12 months",
    level: "Beginner to Advanced",
    rating: 4.8,
    price: "9,025.05",
    discountPrice: "7,288.35",
    financing: "Finance Available",
    startDate: "September 1, 2025",
    taglineBadge: "CAREER-READY DIPLOMA",
    highlights: [
      { icon: Clock, text: "12 Months", subText: "Intensive Program" },
      { icon: BookOpen, text: "20-25h / week", subText: "Dedicated Study" },
      { icon: Globe, text: "Hybrid", subText: "Flexible Learning" },
    ],
    programFeatures: {
      title: "Comprehensive Skill Building",
      description: "Gain expertise across the entire development stack.",
      points: [
        "Specialized learning tracks",
        "Extensive portfolio projects",
        "Dedicated career coaching",
        "Industry-aligned curriculum",
      ],
    },
    curriculum: {
      courseOverview: {
        fullDescription:
          "Embark on a comprehensive 12-month journey to become a versatile full stack software developer. Choose your specialization in eCommerce, Advanced Front-End, or Predictive Analytics to tailor your skills to industry demands. This diploma program offers in-depth training, hands-on projects, and career support.",
        duration: "12 months, full-time",
        nextStartDate: "December 5, 2025",

        courseFormat: "Hybrid (online & optional in-person workshops)",
        timeCommitment: "20-25 hours / week",
        prerequisites: "Basic programming logic recommended",
      },
      courseStructure: {
        headline: "Comprehensive Software Development Tracks",
        subDescription:
          "Build a strong foundation and specialize in high-demand areas of software development.",
        modules: [
          {
            title: "Module 1: Core Programming Fundamentals",
            description: "Build a strong foundation in programming concepts.",
            topics: [
              "Python/JavaScript Basics",
              "Data Structures",
              "Algorithms",
              "Version Control (Git)",
            ],
          },
          {
            title: "Module 2: Front-End Development",
            description: "Learn to build engaging user interfaces.",
            topics: [
              "HTML/CSS",
              "React/Angular/Vue",
              "Responsive Design",
              "UI/UX Principles",
            ],
          },
          {
            title: "Module 3: Back-End Development & Databases",
            description: "Develop server-side logic and manage data.",
            topics: [
              "Node.js/Django/Flask",
              "APIs",
              "SQL/NoSQL Databases",
              "Authentication & Authorization",
            ],
          },
          {
            title: "Module 4: Specialization & Deployment",
            description:
              "Dive deep into your chosen track and deploy applications.",
            topics: [
              "E-commerce Platforms",
              "Advanced UI/UX",
              "Machine Learning Basics",
              "Cloud Deployment (AWS/Azure)",
              "Testing & Debugging",
            ],
          },
        ],
      },
      learningOutcomes: {
        headline: "What You Will Master",
        description: "By the end of this diploma, you will be able to:",
        outcomes: [
          "Develop full-stack web applications",
          "Specialize in a high-demand tech area",
          "Build a professional development portfolio",
          "Gain proficiency in modern development tools",
          "Deploy and maintain web applications",
        ],
      },
    },
    specialFeatures: [
      "Specialized learning tracks",
      "Extensive portfolio projects",
      "Dedicated career coaching",
      "Industry-aligned curriculum",
    ],
  },
  {
    id: 4,
    title: "AI for Business Leaders",
    slug: "ai-for-business-leaders",
    description:
      "Use real-world AI tools to make smarter business decisions — faster. Master real AI applications in this comprehensive 10-week program designed for modern leaders.",
    icon: Brain,
    iconBg: "bg-gradient-to-br from-[#319bcb] to-black",
    badge: { text: "MOST IN-DEMAND", type: "premium" },
    tags: ["AI", "Business Strategy", "Leadership", "Executive"],
    duration: "10 Weeks",
    level: "Executive",
    rating: 4.9,
     price: "2,893.34",
    discountPrice: "2,314.44",
    financing: "Flexible Payments Available",
    startDate: "November 15, 2025",
    taglineBadge: "🔥 MOST IN-DEMAND BUSINESS COURSE",
    highlights: [
      { icon: Clock, text: "10 Weeks", subText: "Live Remote" },
      { icon: BookOpen, text: "4h / week", subText: "Flexible Schedule" },
      { icon: Globe, text: "Real-world", subText: "Applications" },
    ],
    programFeatures: {
      title: "Expert-Led Program",
      description: "Learn from industry leaders",
      points: [
        "Interactive live sessions",
        "Hands-on AI projects",
        "Personalized mentorship",
        "Industry certification",
        "Industry-Recognized Certificate",
        "Beginner-Friendly Approach",
        "Supportive Learning Community",
      ],
    },
    curriculum: {
      courseOverview: {
        fullDescription:
          "This comprehensive program is designed for business leaders who want to harness the power of AI to drive innovation and transformation in their organizations. Through expert-led sessions and practical applications, you'll develop the strategic mindset needed to lead in the AI era.",
        duration: "10 weeks, part-time",
        nextStartDate: "January 15, 2026",
        courseFormat: "Live online sessions + self-paced learning",
        timeCommitment: "4-6 hours per week",
        prerequisites: "Business leadership experience",
      },
      courseStructure: {
        headline: "Master AI Leadership: Transform Your Business Skills",
        subDescription:
          "Gain essential AI leadership skills, develop strategic implementation approaches, and learn to drive responsible AI transformation in your organization.",
        modules: [
          {
            title: "Module 1: AI Foundations for Leaders",
            description:
              "Start with the fundamentals of AI, exploring key concepts and business applications to develop your AI fluency and strategic thinking.",
            topics: [
              "AI Technology Overview",
              "Business Applications",
              "Industry Case Studies",
              "Strategic Planning",
            ],
          },
          {
            title: "Module 2: Strategic AI Implementation",
            description:
              "Learn to develop and execute AI strategies that align with business objectives and drive organizational transformation.",
            topics: [
              "Strategy Development",
              "Implementation Planning",
              "Change Management",
              "Risk Assessment",
            ],
          },
          {
            title: "Module 3: AI Ethics and Governance",
            description:
              "Navigate ethical considerations and governance frameworks to ensure responsible AI implementation in your organization.",
            topics: [
              "Ethical AI Principles",
              "Governance Frameworks",
              "Compliance Management",
              "Bias Mitigation",
            ],
          },
          {
            title: "Module 4: Leading AI Transformation",
            description:
              "Develop advanced leadership skills to drive AI transformation and build AI-ready teams in your organization.",
            topics: [
              "Digital Leadership",
              "Team Building",
              "Culture Development",
              "Future Planning",
            ],
          },
        ],
      },
      learningOutcomes: {
        headline: "What You'll Learn",
        description:
          "By the end of this program, you will have developed the knowledge and skills to lead AI initiatives confidently and drive meaningful transformation in your organization.",
        outcomes: [
          "Develop comprehensive AI strategy aligned with business goals",
          "Build and lead high-performing AI teams",
          "Navigate ethical AI implementation and governance",
          "Drive organizational change and AI adoption",
          "Measure and optimize AI ROI and success metrics",
          "Create sustainable AI culture and practices",
        ],
      },
    },
    specialFeatures: [
      "Interactive live sessions",
      "Hands-on AI projects",
      "Personalized mentorship",
      "Industry certification",
      "Industry-Recognized Certificate",
      "Beginner-Friendly Approach",
      "Supportive Learning Community",
    ],
  },
  {
    id: 5,
    title: "Data with AI Bootcamp",
    slug: "data-with-ai-bootcamp",
    description:
      "Unlock the power of data analytics and AI to transform your career in just 16 weeks, full-time.",
    icon: Brain,
    iconBg: "bg-gradient-to-br from-purple-500 to-red-500",
    badge: { text: "NEW", type: "new" },
    tags: ["AI", "Data", "Web Development"],
    duration: "16 weeks",
    level: "Beginner",
    rating: null,
    financing: null,
    price: "2,893.34",
    discountPrice: "2,314.44",
    startDate: "August 25, 2025",
    programFeatures: {
      title: "Immersive Learning",
      description: "Accelerate your career with intensive training.",
      points: [
        "Full-time immersive program",
        "Project-based learning",
        "Career support",
        "Industry-aligned curriculum",
      ],
    },

    taglineBadge: "DATA & AI CAREER",

    highlights: [
      { icon: Clock, text: "16 Weeks", subText: "Full-time" },
      { icon: BookOpen, text: "25h / week", subText: "Intensive Study" }, // Estimated
      { icon: Globe, text: "Online/Hybrid", subText: "Flexible Learning" }, // Estimated
    ],
    curriculum: {
      // Placeholder curriculum
      courseOverview: {
        fullDescription:
          "This intensive 16-week bootcamp is designed to transform beginners into skilled data and AI professionals. You'll gain hands-on experience with real-world projects, preparing you for a successful career in a high-demand field.",
        duration: "16 weeks, full-time",
        nextStartDate: "to be announced",

        courseFormat: "Online/Hybrid",
        timeCommitment: "25+ hours / week",
        prerequisites: "Basic computer literacy",
      },
      courseStructure: {
        headline: "Comprehensive Data & AI Training",
        subDescription:
          "Master essential data analytics and AI concepts through practical application.",
        modules: [
          {
            title: "Module 1: Data Fundamentals",
            description: "Introduction to data concepts.",
            topics: ["Data Types", "Data Collection", "Data Storage"],
          },
          {
            title: "Module 2: Programming for Data (Python)",
            description: "Learn Python for data manipulation.",
            topics: ["Python Basics", "Pandas", "NumPy"],
          },
          {
            title: "Module 3: Machine Learning Basics",
            description: "Introduction to AI and machine learning.",
            topics: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Model Evaluation",
            ],
          },
          {
            title: "Module 4: Data Visualization & Projects",
            description: "Create compelling data stories.",
            topics: ["Matplotlib", "Seaborn", "Capstone Project"],
          },
        ],
      },
      learningOutcomes: {
        headline: "What You'll Achieve",
        description: "Upon completion, you will be able to:",
        outcomes: [
          "Perform data analysis using Python",
          "Build and evaluate machine learning models",
          "Visualize data effectively",
          "Apply AI concepts to real-world problems",
        ],
      },
    },
    specialFeatures: [
      "Full-time immersive program",
      "Project-based learning",
      "Career support",
      "Industry-aligned curriculum",
    ],
  },
  {
    id: 6,
    title: "Professional Certificate in Data Analytics",
    slug: "professional-certificate-in-data-analytics",
    description:
      "Over 12 weeks, this part-time bootcamp will give you the data skills to drive informed decisions and ethical AI in your organisation.",
    icon: Database,
    iconBg: "bg-gradient-to-br from-blue-400 to-green-500",
    badge: { text: "NEW", type: "new" },
    tags: ["AI", "Data", "Python"],
    duration: "12 weeks",
    level: "Beginner",
    rating: null,
    price: "4,319.92",
    discountPrice: "3,239.92 ",
    financing: "Finance Available",
    startDate: "September 05, 2025",
    programFeatures: {
      title: "Practical Data Skills",
      description: "Develop expertise in data-driven decision making.",
      points: [
        "Part-time flexible schedule",
        "Focus on ethical AI",
        "Hands-on data projects",
        "Industry-recognized certificate",
      ],
    },

    taglineBadge: "DATA ANALYTICS CERTIFICATE",
    highlights: [
      { icon: Clock, text: "12 Weeks", subText: "Part-time" },
      { icon: BookOpen, text: "6-8h / week", subText: "Flexible Learning" }, // Estimated
      { icon: Globe, text: "Online", subText: "Accessible Anywhere" }, // Estimated
    ],

    curriculum: {
      // Placeholder curriculum
      courseOverview: {
        fullDescription:
          "This 12-week part-time bootcamp provides a comprehensive understanding of data analytics, focusing on practical skills and ethical considerations in AI. You'll learn to analyze data, derive insights, and make data-driven decisions that benefit your organization.",
        duration: "12 weeks, part-time",
        nextStartDate: "to be announced",
        courseFormat: "Online",
        timeCommitment: "6-8 hours / week",
        prerequisites: "None",
      },
      courseStructure: {
        headline: "Building Data Analytics Proficiency",
        subDescription:
          "Acquire the skills to analyze data, make informed decisions, and understand ethical AI practices.",
        modules: [
          {
            title: "Module 1: Data Analytics Fundamentals",
            description: "Introduction to data analysis principles.",
            topics: [
              "Data Collection",
              "Data Cleaning",
              "Descriptive Statistics",
            ],
          },
          {
            title: "Module 2: Data Analysis with Python",
            description: "Hands-on data analysis using Python.",
            topics: [
              "Pandas",
              "Data Manipulation",
              "Basic Statistical Analysis",
            ],
          },
          {
            title: "Module 3: Data Visualization & Reporting",
            description: "Create effective data visualizations.",
            topics: ["Matplotlib", "Seaborn", "Dashboarding"],
          },
          {
            title: "Module 4: Ethical AI in Data",
            description: "Understand the ethical implications of AI in data.",
            topics: ["AI Ethics", "Bias in AI", "Responsible Data Use"],
          },
        ],
      },
      learningOutcomes: {
        headline: "What You'll Achieve",
        description: "By the end of this program, you will be able to:",
        outcomes: [
          "Perform data analysis and interpretation",
          "Create compelling data visualizations",
          "Understand ethical considerations in AI",
          "Apply data skills to business problems",
        ],
      },
    },
    specialFeatures: [
      "Part-time flexible schedule",
      "Focus on ethical AI",
      "Hands-on data projects",
      "Industry-recognized certificate",
    ],
  },
];

export const quickLinks = [
  {
    id: 1,
    title: "About Us",
    href: "/about",
  },
  {
    id: 2,
    title: "Contact Us",
    href: "/contact",
  },
  {
    id: 3,
    title: "Courses",
    href: "/courses",
  },
  // {
  //   id: 4,
  //   title: "Privacy Policy",
  //   href: "/privacy-policy",
  // },
];
export const teamMembers = [
  {
    name: "Nabil Osman",
    role: "Chief Executive Officer",
    image: per4,
    bio: "As the Chief Strategy Officer, I shape visionary operations, fostering synergy and growth across diverse geographical regions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nabil.osman@example.com",
    },
  },

  {
    name: "Martin",
    role: "Chief Development Officer",
    image: per2,
    bio: "Innovator specializing in building scalable and robust systems.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "Abdirahman@example.com",
    },
  },
  {
    name: "Robbert Willis",
    role: "MD-UK",
    image: per3,
    bio: "Skilled web developer focused on creating user-friendly web solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@example.com",
    },
  },
  {
    name: "Asad",
    role: "HR Manager",
    image: per7,
    bio: "Creative educator focused on designing impactful learning experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdimalik@example.com",
    },
  },
];

export const faqItems = [
  {
    question: "What is Spondias?",
    answer:
      "Spondias is a leading AI training center in Somalia. We offer a wide range of courses, including data analytics, software development, and cybersecurity.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "To enroll in a course, simply click on the course link and follow the instructions provided. You can also contact our customer support team for assistance.",
  },  
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit/debit cards, bank transfers, and mobile payments. Please check our payment page for more details.",
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer:
      "Yes, we offer financial aid and scholarships for eligible students. Please visit our financial aid page for more information on how to apply.",
  },
  {
    question: "What is the duration of your courses?",
    answer:
      "Course durations vary depending on the program. Most courses range from a few weeks to several months. You can find specific duration details on each course page.",
  },
];

