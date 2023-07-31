import { useState } from "react";

const Footer = () => {
  const links: any[] = [
    {
      name: "Linked In",
      link: "https://www.linkedin.com/in/sahulkola",
    },
    {
      name: "GitHub",
      link: "https://www.github.com/sahulkola",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sahulkola",
    },
  ];
  const year = new Date().getFullYear();
  const [footerLinks, setfooterLinks] = useState(links);

  return (
    <footer>
      <section className="relative">
        &copy; {year} All Rights Reserved <span>Sahul Kola.</span>
      </section>
    </footer>
  );
};

export default Footer;
