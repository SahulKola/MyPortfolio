import Jntuh from "./assets/jntuh-gpa-calc.png";
import CareerHub from "./assets/career-hub.png";
import AngularTodoList from "./assets/career-hub.png";
import BudgetBuddy from "./assets/budget-buddy.png";
interface edu {
  id: Number;
  name: String;
  degree: String;
  course?: String;
  board: String;
  location: String;
  year: String;
  percentage: String;
}
export const Education: edu[] = [
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

interface workExpI {
  id: Number;
  name: String;
  link: String;
  role: String;
  logoUrl: String;
  location: String;
  work: String[];
  year: String;
}
export const workExp: workExpI[] = [
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

export const portfolios = [
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

export const DevIcons = [
  {
    id: 1,
    name: "HTML",
    url: `<i class="devicon-html5-plain"></i>`,
  },
  {
    id: 2,
    name: "CSS",
    url: `<i class="devicon-css3-plain"></i>`,
  },
  {
    id: 3,
    name: "Tailwind",
    url: `<i class="devicon-tailwindcss-plain"></i>`,
  },

  {
    id: 4,
    name: "Sass",
    url: `<i class="devicon-sass-original"></i>`,
  },

  {
    id: 5,
    name: "React",
    url: `<i class="devicon-react-original"></i>`,
  },
  {
    id: 6,
    name: "Angular",
    url: `<i class="devicon-angularjs-plain"></i>`,
  },
  {
    id: 7,
    name: "MarkDown",
    url: `<i class="devicon-markdown-original"></i>`,
  },
  {
    id: 8,
    name: "JavaScript",
    url: `<i class="devicon-javascript-plain"></i>`,
  },
  {
    id: 9,
    name: "MarkDown",
    url: `<i class="devicon-typescript-plain"></i>`,
  },
  {
    name: "VS Code",
    url: `<i class="devicon-vscode-plain"></i>`,
  },
  {
    name: "GitHub",
    url: `<i class="devicon-git-plain"></i>`,
  },
  {
    name: "GitHub",
    url: `<i class="devicon-github-original"></i>`,
  },
  {
    name: "Figma",
    url: `<i class="devicon-figma-plain"></i>`,
  },
  {
    name: "Redux",
    url: `<i class="devicon-redux-original"></i>`,
  },
];
