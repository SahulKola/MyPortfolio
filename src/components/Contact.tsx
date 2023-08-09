import SectionHeader from "./SectionHeader";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { ReactComponent as SVGScooter } from "../hello.svg";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sai Kumar Kola";
  }, []);

  return (
    <>
      <SectionHeader title="Contact" caption="Get In Touch" />
      <section className=" grid md:grid-cols-2 items-center wrapper mt-10">
        <div className="text-white-200">
          <section className="flex justify-start items-start mb-5 md:mb-10">
            <span className="pr-2 md:pr-4">
              <FaLocationDot size={40} className="hover:text-accent" />
            </span>
            <div>
              <p className="text-base text-white-400">I am Based out of </p>
              <h3 className=" text-base md:text-3xl font-m">Hyderabad</h3>
            </div>
          </section>
          <section className="flex justify-start items-start">
            <span className="pr-2 md:pr-4 ">
              <FaEnvelope size={40} className="hover:text-accent" />
            </span>
            <div>
              <p className="text-base text-white-400">Mail me at</p>
              <h3 className=" text-base md:text-3xl font-m">
                mail2sahul.js@gmail.com
              </h3>
            </div>
          </section>
        </div>
        <section className="w-full h-auto my-5 md:my-0">
          <SVGScooter className="w-full h-full" />
        </section>
      </section>
    </>
  );
};

export default Contact;
