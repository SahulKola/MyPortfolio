import Jntuh from "./assets/projects/jntuh-gpa-calc.png";
import CareerHub from "./assets/projects/career-hub.png";
import AngularTodoList from "./assets/projects/angular-todo-list.png";
import BudgetBuddy from "./assets/projects/budget-buddy.png";
import LittleLemon from "./assets/projects/little-lemon.png";
import BuildAThon from "./assets/build-a-thon.png";
import Rubiks from "./assets/rubiks.png";

export interface IEdu {
  id: Number;
  name: String;
  degree: String;
  course?: String;
  board: String;
  location: String;
  year: String;
  percentage: String;
}
export const Education: IEdu[] = [
  {
    id: 1,
    name: "ACE Engineering College",
    degree: "Bachelor of Technology",
    course: "Computer Science & Engineering",
    board: "Jawaharlal Nehru Technological University",
    location: "Hyderabad",
    year: "2018-2022",
    percentage: "7.3",
  },
  {
    id: 2,
    name: "SR Junior College for Boys",
    degree: "Intermediate",
    course: "Maths Physics Chemistry",
    board: "Board of Intermediate Education, TS.",
    location: "Warangal",
    year: "2016-2018",
    percentage: "89%",
  },
  {
    id: 3,
    name: "Wisdom High School",
    degree: "Class 10th",
    board: "Board of Secondary Education, TS.",
    location: "Warangal",
    year: "2015-2016",
    percentage: "9.5",
  },
];

export interface IWorkExp {
  id: Number;
  name: String;
  link: String;
  role: String;
  logoUrl: String;
  location: String;
  work: String[];
  year: String;
}
export const workExp: IWorkExp[] = [
  {
    id: 1,
    name: "Media.net",
    link: "https://www.media.net",
    role: "Associate UI Developer",
    logoUrl: "https://www.media.net",
    location: "Andheri East, Mumbai (Remote)",
    work: [
      "Developed Ad variations like Keyword Blocks, Search Engine Result Pages, Interstitial Ads, and Lander Pages.",
      "Worked with Skenzo Template Language Tags which provides ads from the backend.",
      "Created Custom Snippets for quite a few ad variations, which minimized 20% of my development time.",
      "Collaborated with Business Development Team and QA team to ensure UI was implemented correctly.",
      "Delivered 100+ good-performing creative ads and lander pages with a 90% acceptance rate for premium publishers.",
      "Developed quality ads during the Black Friday Sale Season, with multiple ad variations.",
    ],
    year: "May 2022 - Present",
  },
];
export interface IPortfolio {
  id: number;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  prop?: string;
  techstack: string[];
}
export const portfolios: IPortfolio[] = [
  {
    id: 1,
    name: "Angular Todo List",
    description:
      "This is an Angular-based application called Simple Todo List, designed to assist users in organizing and prioritizing their daily tasks. The application enables users to plan and manage their tasks effectively, ensuring that important tasks receive priority. By using this application, users can streamline their daily workflow and enhance their productivity. ( PS: The primary purpose to build this app is to get a fundamental understanding of Angular's functionality and working. ) ",
    url: "#",
    thumbnail: AngularTodoList,
    techstack: ["Angular", "TypeScript"],
  },
  {
    id: 2,
    name: "Little Lemon Restaurant",
    description:
      "The Little Lemon website is an online platform designed to provide information and services related to the Little Lemon restaurant. It serves as a digital hub where customers can explore various aspects of the restaurant, make reservations, access menus, and stay updated with the latest news and promotions.",
    url: "https://little-lemon-coursera-capstone.netlify.app/",
    thumbnail: LittleLemon,
    techstack: ["React", "React-Router-DOM", "Sass"],
  },
  {
    id: 3,
    name: "JNTUH GPA Calc. - SGPA & CGPA Calculator",
    description:
      "A Web-based application that offers students to do mathematical computations which helps in finding accurate CGPA & SGPA with an interactive and user-friendly Graphical User Interface. It includes features like Target GPA Calculator which generates average SGPA to be scored in upcoming semesters to maintain Target GPA.The GPA score will be recorded in the database and users can track their progress by login.",
    url: "https://jntuh-gpa-calc.onrender.com/",
    thumbnail: Jntuh,
    techstack: ["HTML", "CSS", "Bootstrap", "MYSQL", "Flask"],
  },
  {
    id: 4,
    name: "Budget Buddy - a personal expense Tracker",
    description:
      "This project secured top 10 position in India's Largest Build-A-Thon on Modern Application Development, a 7 Days Training Program on Building Morden Apps & Deploying on VMware Tanzu Application Service followed by 5 weeks Project Build-A-Thon conducted by SmartBridge Educational Services Pvt Ltd in association with VMware IT Academy",
    url: "https://budget-buddy-30mh.onrender.com/",
    thumbnail: BudgetBuddy,
    techstack: ["HTML", "CSS", "Bootstrap", "AOS.js", "MYSQL", "Flask"],
  },
  {
    id: 5,
    name: "Career Hub",
    description:
      "A Job portal application that connects recruiters and job seekers where recruiters are the source of the resources, and the job seeker can find and apply for their targeted job. Users will have access to the career portal page where current openings are displayed which were uploaded by the recruiter of the company via the admin interface",
    url: "#",
    thumbnail: CareerHub,
    techstack: ["HTML", "CSS", "MYSQL", "PHP"],
  },
];

export const Recognizations = [
  {
    id: 1,
    name: "Finalist - VMware Taznu Build a Thon",
    description:
      "Certificate for outstanding performance in India's Largest Build-A-Thon on Modern Application Development, a 7 Days Training Program on Building Modern Apps & Deploying on VMware Tanzu Application Service followed by 5 weeks Project Build-A-Thon conducted by SmartBridge Educational Services Pvt Ltd in association with VMware IT Academy",
    url: "https://www.dropbox.com/s/d8xgzzllxo8bbvl/Finalist%20-%20VMware%20Tanzu%20Build%20a%20Thon.pdf?dl=0",
    thumbnail: BuildAThon,
    prop: "Project Developed in Build-a-thon",
    techstack: ["Budget Buddy"],
  },
  {
    id: 2,
    name: "P3 Grand Open March 2017 - Hyderabad",
    description:
      "It initially began as a simple hobby to solve the cube and quickly evolved into a passion for competitive solving. That interest led me to dive deep into the world of the Rubik's Cube by learning and mastering various algorithms for permutation and combination. Utilizing the F2L (First Two Layers) method, which was considered quite efficient at the time, I was able to solve the cube at a relatively fast pace.",
    url: "https://www.worldcubeassociation.org/persons/2017NAAN01",
    thumbnail: Rubiks,
    prop: "Best Score",
    techstack: ["3x3 - 24.78s*", "2x2 - 8.06s*"],
  },
];
