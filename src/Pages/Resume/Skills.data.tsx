import {
  DiHtml5,
  DiCss3,
  DiAngularSimple,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
export interface ISkill {
  name: string;
  url?: any;
}
export const SkillsArray: ISkill[] = [
  {
    name: "HTML",
    url: <DiHtml5 />,
  },
  {
    name: "CSS",
    url: <DiCss3 />,
  },
  {
    name: "Sass",
    url: <DiSass />,
  },
  {
    name: "Tailwind",
    url: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    url: <SiJavascript />,
  },
  {
    name: "TypeScript",
    url: <SiTypescript />,
  },
  {
    name: "React",
    url: <DiReact />,
  },
  {
    name: "Redux",
    url: <SiRedux />,
  },
  {
    name: "Angular",
    url: <DiAngularSimple />,
  },
];

export const ToolsArray: ISkill[] = [
  {
    name: "VS Code",
    url: <TbBrandVscode />,
  },
  {
    name: "Git",
    url: <DiGit />,
  },
  {
    name: "Git Hub",
    url: <DiGithubBadge />,
  },
  {
    name: "Figma",
    url: <IoLogoFigma />,
  },
];
