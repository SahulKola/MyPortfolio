import imgUrl from "../assets/img.jpg";
const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center pt-6">
      <div className="max-w-[365px] h-[365px] border-[18px] box-shadow border-solid border-border rounded-full overflow-hidden">
        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <section className="flex flex-col justify-stretch grow-0 shrink-1 basis-1/2 mt-10 md:mt-0 md:pl-12">
        <p className=" inline-block relative w-[120px] text-xl text-white-100 before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[3px] before:bg-border after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-accent after:w-[50px] after:h-[3px]">
          What I Do
        </p>
        <p className="inline-block  self-start px-5 py-1 border-accent border-2 text-white-100 border-solid rounded-3xl btn-shadow">
          2018 - 2022
        </p>
        <p className="text-xl text-white-400">UI Developer</p>
        <h2 className="mt-2 text-5xl text-white-100 font-sm">Sai Kumar Kola</h2>
        <div className="icons"></div>
        <p className=" mt-5 text-base text-white-400">
          I am a self-taught Web Developer who is passionate about bringing
          client's visions to life. My strongest skill is my creativity. Being
          able to gather client's requirements and translate those into an
          engaging, effective, and unique website with minimal and user-friendly
          UI.{" "}
          <p className="hover:underline cursor-pointer">Let's get talking</p>
        </p>
        <div className="mt-8">
          <a
            href="/download"
            className="btn border-accent hover:bg-accent hover:text-grey-400"
          >
            Download CV
          </a>
          <a
            href="/contact"
            className="btn ml-4 border-white-300  hover:bg-white-300 hover:text-grey-400"
          >
            Contact
          </a>
        </div>
      </section>
    </section>
  );
};

export default Hero;
