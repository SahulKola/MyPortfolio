interface links {
  id: number;
  name: string;
  url: string;
}
const Footer = () => {
  const links: links[] = [
    {
      id: 1,
      name: "Linked In",
      url: "https://www.linkedin.com/in/sahulkola",
    },
    {
      id: 2,
      name: "GitHub",
      url: "https://www.github.com/sahulnkola",
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/sahulkola",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className=" w-full border-t-2 border-grey-100 border-solid text-white-400 py-3 pb-[90px] md:pb-0">
      <section className="flex flex-wrap md:flex-auto md:justify-between items-center justify-center container mx-auto px-5 lg:px-12 h-12 md:gap-5 ">
        <ul className="flex justify-center items-center gap-2 md:gap-5">
          {links.map(link => {
            return (
              <li key={link.id} className="hover:text-white-100 cursor-pointer">
                <a href={link.url} target="blank">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <section className="shrink-0 text-sm md:text-base md:pl-10">
          &copy; {year} All Rights Reserved <span>Sahul Kola.</span>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
