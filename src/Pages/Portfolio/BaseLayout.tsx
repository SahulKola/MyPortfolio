import { IPortfolio } from "../../data";

const BaseLayout = ({
  portfolio,
  flag,
}: {
  portfolio: IPortfolio;
  flag: string;
}) => {
  return (
    <section className="flex flex-col items-start justify-start basis-1/2 text-white-100 mb-10 mx-4">
      <div className="relative md:min-h-[200px] lg:min-h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-grey-500">
        <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
          <img
            src={portfolio.thumbnail}
            alt={portfolio.name}
            className="hover:scale-105 transition-all object-cover w-full h-full"
          />
        </a>
      </div>
      <section className="flex flex-col items-start justify-between h-full">
        <div>
          <h2 className="text-xl self-start mt-5 font-m">{portfolio.name}</h2>
          <p className="text-sm text-white-400 mt-2">{portfolio.description}</p>
        </div>
        <div className="mt-2">
          <h3 className="font-m text-base">
            {flag === "portfolio" ? "TechStack" : portfolio.prop}
          </h3>
          <div className="-mx-2 mt-2 flex flex-wrap">
            {portfolio.techstack.map((m: string) => (
              <span className="techstack mt-2">{m}</span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BaseLayout;
