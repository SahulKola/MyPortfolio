import Skill from "./Skill";
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

const SkillsArray = [
  {
    name: "HTML",
    logo: <DiHtml5 />,
  },
  {
    name: "CSS",
    logo: <DiCss3 />,
  },
  {
    name: "Sass",
    logo: <DiSass />,
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    logo: <SiJavascript />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript />,
  },
  {
    name: "React",
    logo: <DiReact />,
  },
  {
    name: "Redux",
    logo: <SiRedux />,
  },
  {
    name: "Angular",
    logo: <DiAngularSimple />,
  },
];

const ToolsArray = [
  {
    name: "VS Code",
    logo: <TbBrandVscode />,
  },
  {
    name: "Git",
    logo: <DiGit />,
  },
  {
    name: "Git Hub",
    logo: <DiGithubBadge />,
  },
  {
    name: "Figma",
    logo: <IoLogoFigma />,
  },
];
const Skills = () => {
  return (
    <section>
      <h2 className="heading">Skills</h2>
      <section className="grid md:grid-cols-2">
        <section className="mb-5 md:mb-0">
          <h3 className="text-2xl text-white-300 font-m mb-2">
            Web Development
          </h3>
          <section className="grid grid-cols-3 gap-1">
            {SkillsArray.map(skill => (
              <Skill elem={skill.logo} name={skill.name} />
            ))}
          </section>
        </section>
        <section className="mb-5 md:mb-0">
          <h3 className="text-2xl text-white-300 font-m mb-2">
            Tools & Technologies
          </h3>
          <section className="grid grid-cols-2">
            {ToolsArray.map(tool => (
              <Skill elem={tool.logo} name={tool.name} />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
