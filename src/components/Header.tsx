import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="relative flex justify-between items-center mt-4 w-full h-20">
      <section className="flex justify-between items-center">
        <img src={Logo} alt="My Logo" className="w-10 h-10 md:w-12 md:h-12" />
        <p className=" text-xl text-white-100 pl-3">
          <span className="font-sm">Sahul</span> Kola
        </p>
      </section>
      <menu className=" hidden md:flex md:justify-between md:items-center md:gap-12  md:text-sm md:text-white-400">
        <li className="hover:text-white-100">
          <a href="/about">About Me</a>
        </li>
        <li className="hover:text-white-100">
          <a href="/resume">Resume</a>
        </li>
        <li className="hover:text-white-100">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="hover:text-white-100">
          <a href="/blog">Blog</a>
        </li>
        <li className="hover:text-white-100">
          <a href="/contact">Contact</a>
        </li>
      </menu>
    </header>
  );
};

export default Header;
