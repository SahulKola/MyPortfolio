import { workExp } from "../data";
import { Link } from "react-router-dom";
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

const WorkComponent = () => {
  return (
    <section className="basis-1/2">
      <h2 className="heading">Work Experience</h2>
      {workExp.map((work: workExpI) => (
        <section className="text-white-100 border-solid border-l-2 border-b-2 border-grey-100 border-b-grey-400 ml-4 pt-3 mb-3 first-of-type:p-0 last-of-type:mb-3">
          <section className="flex justify-start items-center">
            <p className="year -ml-4">{work.year}</p>
            <Link to="https://www.media.net" target="_blank">
              <h3 className="pl-2 text-white-100 text-xl font-m">
                {work.name}
              </h3>
            </Link>
          </section>
          <section className="pl-5 py-4 text-base text-white-100 pb-10 mb-10  border-b-2 border-grey-100">
            <p>{work.role}</p>
            <p>{work.location}</p>
            <ul>
              {work.work.map(w => (
                <li className=" list-disc ml-5 text-white-400">{w}</li>
              ))}
            </ul>
          </section>
        </section>
      ))}
    </section>
  );
};

export default WorkComponent;
