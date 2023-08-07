import SectionHeader from "./SectionHeader";
import { portfolios } from "../data";
interface portfolioI {
  id: number;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  techstack: string[];
}

const Portfolio = () => {
  return (
    <>
      <SectionHeader title="Portfolio" caption="My Works" />
      <section className="wrapper mt-10">
        <section className="grid md:grid-cols-2 -mx-4">
          {portfolios.map((portfolio: portfolioI) => (
            <section className="flex flex-col items-start justify-between basis-1/2 text-white-100 mb-10 mx-4">
              <div className="relative md:min-h-[200px] lg:min-h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-grey-500">
                <img
                  src={portfolio.thumbnail}
                  alt={portfolio.name}
                  className="hover:scale-105 transition-all object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl self-start mt-5 font-m">
                {portfolio.name}
              </h2>
              <p className="text-sm text-white-400">{portfolio.description}</p>
              <div className="mt-2">
                <h3 className="font-m text-base">TechStack</h3>
                <div className="-mx-2 mt-2 flex flex-wrap">
                  {portfolio.techstack.map(m => (
                    <span className="techstack mt-2">{m}</span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Portfolio;
