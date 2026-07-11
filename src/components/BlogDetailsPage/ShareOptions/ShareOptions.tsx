import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FiTwitter, FiLink } from "react-icons/fi";
import toast from "react-hot-toast";

const ShareOptions = () => {
  const pathname = window.location.href;
  const encodedUrl = encodeURIComponent(pathname);
  const encodedText = encodeURIComponent("Check out this blog post!");

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FaLinkedin />,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookSquare />,
    },
    {
      name: "Twitter/X",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      icon: <FiTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prtech_solutions",
      icon: <PiInstagramLogoFill />,
    },
    {
      name: "Copy Link",
      url: "#",
      icon: <FiLink />,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(pathname);
        toast.success("Link copied to clipboard!");
      },
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
            onClick={link?.onClick}
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
