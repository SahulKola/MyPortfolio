import imgUrl from "../../assets/profile-img.jpg";
import { Link } from "react-router-dom";
import { SiHashnode } from "react-icons/si";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
  IoIosMail,
} from "react-icons/io";

import { FaCode, FaPalette } from "react-icons/fa6";
import { useEffect } from "react";

const iconsArray = [
  {
    name: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/sahulkola",
    color: "#0A66C2",
  },
  {
    name: <IoLogoGithub />,
    url: "https://www.github.com/sahulkola",
  },
  {
    name: <IoLogoTwitter />,
    url: "https://www.twitter.com/sahulkola",
  },

  {
    name: <IoIosMail />,
    url: "mailto:mail2sahul.js@gmail.com",
  },

  {
    name: <SiHashnode size={20} />,
    url: "https://sahulkola.hashnode.dev/",
  },
];

const Hero = () => {
  useEffect(() => {
    document.title = "Home | Sai Kumar Kola";
  }, []);
  return (
    <>
      <section className="relative flex flex-col md:flex-row justify-center items-center wrapper pt-6 pb-10">
        <div className="max-w-[365px] w-full max-h-[365px] border-[18px] bg-grey-500 box-shadow border-solid border-border rounded-full overflow-hidden">
          <img
            src={imgUrl}
            alt="My Posing as Professional xP"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <section className="flex flex-col items-center md:items-start grow-0 shrink-1 basis-1/2 mt-10 md:mt-0 md:pl-12">
          <p className="text-xl text-white-400">UI Developer</p>
          <h2 className="mt-2 text-5xl text-white-100 font-sm">
            Sai Kumar Kola
          </h2>
          <div className="mt-3 flex justify-center sm:justify-start items-center gap-4">
            {iconsArray.map(icon => (
              <Link to={icon.url} target="_blank">
                <span
                  className={`text-white-500 text-2xl hover:text-white-100 hover:-translate-y-1 transition-all cursor-pointer`}
                >
                  {icon.name}
                </span>
              </Link>
            ))}
          </div>
          <p className=" mt-5 text-base text-white-400">
            I am a self-taught Web Developer who is passionate about bringing
            client's visions to life. My strongest skill is my creativity. Being
            able to gather client's requirements and translate those into an
            engaging, effective, and unique website with minimal and
            user-friendly UI. <br />
          </p>
          <div className="mt-8 text-center sm:text-left">
            <Link
              to={require("../../assets/Resume-SaiKumarKola.pdf")}
              className="btn border-accent hover:bg-accent hover:text-grey-400 transition-colors mb-3 sm:mb-0"
              download="Resume - Sai Kumar Kola"
              target="_blank"
            >
              Download CV
            </Link>
            <Link
              to="/contact"
              className="btn ml-2 sm:ml-4 border-white-300  hover:bg-white-300 hover:text-grey-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </section>
        <section></section>
      </section>
      <section className="wrapper mb-20">
        <h2 className="heading mt-10">What I Do</h2>
        <section className="grid md:grid-cols-2 gap-0 md:gap-5">
          <section className="flex justify-start items-start basis-1/2 mb-5 md:mb-0">
            <FaCode size={30} className="shrink-0 text-accent" />
            <div className="pl-2 text-white-100 ">
              <h3 className="text-2xl font-m">Web Development</h3>
              <p className="text-base text-white-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Beatae, doloremque magni? Quidem, eligendi perspiciatis quam
                eius labore est, illo quos, hic sequi magni dolorum harum
                dolorem ipsum similique illum atque?
              </p>
            </div>
          </section>
          <section className="flex justify-start items-start basis-1/2">
            <FaPalette size={30} className="shrink-0 text-accent" />
            <div className="pl-2 text-white-100 ">
              <h3 className="text-2xl font-m">UI/UX</h3>
              <p className="text-base text-white-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Beatae, doloremque magni? Quidem, eligendi perspiciatis quam
                eius labore est, illo quos, hic sequi magni dolorum harum
                dolorem ipsum similique illum atque?
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
