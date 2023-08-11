import SectionHeader from "../../components/SectionHeader";
import { portfolios } from "../../data";
import { useEffect } from "react";
import { IPortfolio } from "../../data";
import BaseLayout from "./BaseLayout";
import Achievements from "./Achievements";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Sai Kumar Kola";
  }, []);
  return (
    <>
      <SectionHeader title="Portfolio" caption="My Works" />
      <section className="wrapper mt-10">
        <section className="grid md:grid-cols-2 -mx-4">
          {portfolios.map((portfolio: IPortfolio) => (
            <BaseLayout flag="portfolio" portfolio={portfolio} />
          ))}
        </section>
        <Achievements />
      </section>
    </>
  );
};

export default Portfolio;
