import { Recognizations } from "../../data";
import { IPortfolio } from "../../data";
import BaseLayout from "./BaseLayout";
const Achievements = () => {
  return (
    <section>
      <h1 className="heading">Achievements</h1>
      <section className="grid md:grid-cols-2 -mx-4">
        {Recognizations.map((regcog: IPortfolio, index) => (
          <BaseLayout index={index} flag="" portfolio={regcog} />
        ))}
      </section>
    </section>
  );
};

export default Achievements;
