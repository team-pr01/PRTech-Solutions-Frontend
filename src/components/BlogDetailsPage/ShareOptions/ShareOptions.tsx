import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
const ShareOptions = () => {
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/prtech-solutions",
      icon: <FaLinkedin />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/prtechsolutions01",
      icon: <FaFacebookSquare />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prtech_solutions",
      icon: <PiInstagramLogoFill />,
    },
  ];
  return (
    <div className="pb-5 border-b border-neutral-50/10">
      <p className="text-neutral-50 font-medium">Share on Social Media</p>
      <div className="flex justify-center md:justify-start gap-4 mt-3">
        {socialMediaLinks?.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="size-9 text-lg border border-neutral-97 rounded-xl flex items-center justify-center text-neutral-50 hover:text-white bg-white hover:bg-primary-10 transition duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareOptions;
