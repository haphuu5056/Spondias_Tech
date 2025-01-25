import { per1, per2, per3, per4 } from "../assets/images";
import {
  Users,
  Code,
  Brain,
  Rocket,
  CheckCircle,
  Award,
  Zap,
} from "lucide-react";

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
    text: "The instructors were knowledgeable, and the hands-on projects made learning practical.",
    name: "Abdalla Ahmed",
    role: "Software Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    rating: 4,
    text: "Spondias helped me gain the skills and confidence to transition into the tech industry.",
    name: "Fatima Omar",
    role: "Data Analyst",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    rating: 5,
    text: "The webinars and mentoring gave me confidence and clear guidance for my career growth.",
    name: "Mohamed Abdullah",
    role: "Cybersecurity Specialist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    rating: 5,
    text: "The instructors were skilled, and the projects made learning practical and engaging.",
    name: "Aisha Osman",
    role: "Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
    title: "Full-Stack Web Development",
    description:
      "Master both front-end and back-end technologies to become a versatile developer.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    price: 79.99,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Web Development",
  },

  {
    title: "Business Management Basics",
    description:
      "Understand the principles of managing a successful business and making strategic decisions.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    price: 79.99,
    duration: "8 weeks",
    level: "Beginner",
    category: "Business",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Learn the essentials of cybersecurity and protect organizations from cyber threats.",
    image:
      "https://img.freepik.com/free-photo/eye-futuristic-robot_53876-95096.jpg?t=st=1736538454~exp=1736542054~hmac=3672f780f9607f3f7caadf60e670b4c25571a4c9750dc47b142688dd9effad15&w=900",
    rating: 4.9,
    price: 79.99,
    duration: "9 weeks",
    level: "Intermediate",
    category: "Cybersecurity",
  },
  {
    title: "Graphic Design Fundamentals",
    description:
      "Develop your creativity and technical skills to create visually stunning designs.",
    image:
      "https://img.freepik.com/free-photo/wacom-work_1098-13573.jpg?t=st=1736538233~exp=1736541833~hmac=76eb94d3979c405ab06c01ccd0df203c1665c962487aa7625794b8c671abd8a4&w=740",
    rating: 4.7,
    price: 79.99,
    duration: "10 weeks",
    level: "Beginner",
    category: "Design",
  },
  {
    title: "Machine Learning A-Z: Hands-On Python & R",
    description:
      "Master machine learning techniques using Python and R in this hands-on course.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "AI & ML",
    rating: 4.6,
    price: 109.99,
    duration: "12 weeks",
    level: "Intermediate",
  },

  {
    title: "UX/UI Design Masterclass",
    description:
      "Create stunning user interfaces and improve user experiences with this comprehensive course.",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    rating: 4.8,
    price: 129.99,
    duration: "12 weeks",
    level: "Beginner",
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
    title: "Careers",
    href: "/careers",
  },
  {
    id: 4,
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: 5,
    title: "Terms of Service",
    href: "/terms-of-service",
  },
];
export const teamMembers = [
  {
    name: "Nabil Osman",
    role: "Chief Executive Officer",
    image: per4,
    bio: "Dedicated leader with a vision to transform tech education in Somalia.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nabil.osman@example.com",
    },
  },

  {
    name: "Abdirahman Abdirashid",
    role: "Lead Developer",
    image: per3,
    bio: "Innovator specializing in building scalable and robust systems.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "Abdirahman@example.com",
    },
  },
  {
    name: "Aisha",
    role: "Web Developer",
    image: per2,
    bio: "Skilled web developer focused on creating user-friendly web solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@example.com",
    },
  },
  {
    name: "Abdimalik Abdullahi",
    role: "Curriculum Designer",
    image: per1,
    bio: "Creative educator focused on designing impactful learning experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdimalik@example.com",
    },
  },
];

export const events = [
  {
    type: "workshop",
    title: "Advanced React Patterns",
    date: "August 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Dive deep into advanced React patterns and improve your application architecture.",
  },
  {
    type: "seminar",
    title: "The Future of AI in Tech",
    date: "August 20, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Hub Auditorium",
    image:
      "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore the latest trends and future prospects of AI in the tech industry.",
  },
  {
    type: "workshop",
    title: "DevOps Best Practices",
    date: "September 5, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Learn and implement DevOps best practices to streamline your development process.",
  },
  {
    type: "other",
    title: "Tech Career Fair",
    date: "September 15, 2023",
    time: "11:00 AM - 4:00 PM",
    location: "City Convention Center",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Connect with top tech companies and explore exciting career opportunities.",
  },
];

export const faqItems = [
  {
    question: "How do I register for an event?",
    answer:
      "To register for an event, simply click the 'Register Now' button on the event card. You'll be directed to a registration form where you can provide your details and secure your spot.",
  },
  {
    question: "Are the online workshops live or pre-recorded?",
    answer:
      "Our online workshops are conducted live, allowing real-time interaction with the instructor and other participants. However, recordings are often made available to registered attendees for a limited time after the event.",
  },
  {
    question: "What happens if an event is full?",
    answer:
      "If an event reaches capacity, you can join a waitlist. We'll notify you if a spot becomes available. We also often schedule additional sessions for popular events.",
  },
  {
    question:
      "Can I get a refund if I can't attend an event I've registered for?",
    answer:
      "Yes, we offer refunds up to 7 days before the event date. After that, you can transfer your registration to another person or receive credit for a future event.",
  },
  {
    question: "Do you offer group discounts for workshops and seminars?",
    answer:
      "Yes, we offer group discounts for teams of 3 or more attending the same event. Please contact our sales team for more information on group rates.",
  },
];

export const upcomingEvents = [
  {
    id: 1,
    type: "seminar",
    title: "Introduction to Machine Learning",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Arman Hall",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  // {
  //   id: 2,
  //   type: "Seminar",
  //   title: "Master Cybersecurity in the Digital Era",
  //   date: "March 20, 2024",
  //   time: "2:00 PM - 5:00 PM",
  //   location: "Jazeera University",
  //   image:
  //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  // },
  {
    id: 3,
    type: "Workshop",
    title: "Agile Project Management",
    date: "July 22, 2023",
    time: "3:00 PM - 6:00 PM",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    date: "March 25, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Online",
    title: "Women in Tech Networking Event",
    type: "Other",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];
