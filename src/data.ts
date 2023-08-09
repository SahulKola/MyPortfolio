import Jntuh from "./assets/projects/jntuh-gpa-calc.png";
import CareerHub from "./assets/projects/career-hub.png";
import AngularTodoList from "./assets/projects/angular-todo-list.png";
import BudgetBuddy from "./assets/projects/budget-buddy.png";

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
      "Created Custom Snippets for our Dev team, which minimized 30% of our development time.",
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
  techstack: string[];
}
export const portfolios: IPortfolio[] = [
  {
    id: 1,
    name: "Angular Todo List",
    description:
      "A Web-based application that offers students to do mathematical computations which helps in finding accurate CGPA & SGPA with an interactive and user-friendly Graphical User Interface. It includes features like Target GPA Calculator which generates average SGPA to be scored in upcoming semesters to maintain Target GPA.The GPA score will be recorded in the database and users can track their progress by login.",
    url: "https://www.google.com",
    thumbnail: AngularTodoList,
    techstack: ["Angular", "TypeScript"],
  },
  {
    id: 2,
    name: "JNTUH GPA Calc. - SGPA & CGPA Calculator",
    description:
      "A Web-based application that offers students to do mathematical computations which helps in finding accurate CGPA & SGPA with an interactive and user-friendly Graphical User Interface. It includes features like Target GPA Calculator which generates average SGPA to be scored in upcoming semesters to maintain Target GPA.The GPA score will be recorded in the database and users can track their progress by login.",
    url: "https://www.google.com",
    thumbnail: Jntuh,
    techstack: ["HTML", "CSS", "MYSQL", "Bootstrap"],
  },
  {
    id: 3,
    name: "Budget Buddy - a personal expense Tracker",
    description:
      "This project secured top 10 position in India's Largest Build-A-Thon on Modern Application Development, a 7 Days Training Program on Building Morden Apps & Deploying on VMware Tanzu Application Service followed by 5 weeks Project Build-A-Thon conducted by SmartBridge Educational Services Pvt Ltd in association with VMware IT Academy",
    url: "https://www.google.com",
    thumbnail: BudgetBuddy,
    techstack: ["HTML", "CSS", "MYSQL", "Bootstrap"],
  },
  {
    id: 4,
    name: "Career Hub",
    description:
      "A Job portal application that connects recruiters and job seekers where recruiters are the source of the resources, and the job seeker can find and apply for their targeted job. Users will have access to the career portal page where current openings are displayed which were uploaded by the recruiter of the company via the admin interface",
    url: "https://www.google.com",
    thumbnail: CareerHub,
    techstack: ["HTML", "CSS", "MYSQL", "Bootstrap"],
  },
];
