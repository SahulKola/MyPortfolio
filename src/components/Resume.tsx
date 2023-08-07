import EducationComponent from "./EducationComponent";
import SectionHeader from "./SectionHeader";
import Certificate from "./Certificate";
import WorkComponent from "./WorkComponent";
import Skills from "./Skills";

const Resume = () => {
  return (
    <>
      <SectionHeader title="Resume" caption="My Resume" />
      <section className="wrapper">
        <section className="grid md:grid-cols-2 ">
          <EducationComponent />
          <WorkComponent />
        </section>
        <Certificate />
        <Skills />
      </section>
    </>
  );
};

export default Resume;
