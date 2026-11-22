import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { handleScrollToServices } from "../../../helpers/handleScrollToServicesSection";
import StartYourProjectModal from "../StartYourProjectModal/StartYourProjectModal";
import { useState } from "react";
import FooterCTA from "./FooterCTA";

const Footer = () => {
  const [isStartYourProjectModalOpen, setIsStartYourProjectModalOpen] =
    useState<boolean>(false);
  const pathname = useLocation().pathname;
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
  const importantLinks = [
    // {
    //   label: "About Us",
    //   path: "/about-us",
    // },
    {
      label: "Services",
      onClick: handleScrollToServices,
    },
    {
      label: "Our Work",
      path: "/our-work",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "Career",
      path: "/career",
    },
  ];
  const services = [
    {
      label: "Web Development",
    },
    {
      label: "Mobile App Development",
    },
    {
      label: "UI/UX Design",
    },
    {
      label: "AI Development",
    },
    {
      label: "SaaS Development",
    },
    {
      label: "AI Automation",
    },
  ];

  const contactDetails = [
    {
      icon: ICONS.phone,
      text: "+91 93599 63665 (IND)",
      href: "tel:+919359963665",
    },
    {
      icon: ICONS.phone,
      text: "+880 1572-915890 (BD)",
      href: "tel:+8801572915890",
    },
    {
      icon: ICONS.location,
      text: "1234 Mumbai, Maharashtra 400001, India",
    },
    {
      icon: ICONS.email,
      text: "hello@prtech-solutions.com",
      href: "mailto:hello@prtech-solutions.com",
    },
  ];

  const licenseDetails = [
    {
      text: "GSTIN : 27AAQCP8566M1ZB",
    },
    {
      text: "PAN Number : AAQCP8566M",
    },
    {
      text: "CIN/LLPIN : U62099MR2026OPC474735",
    },
  ];

  return (
    <div className="bg-neutral-20 py-7.5 relative font-Manrope overflow-hidden">
      <img
        src={IMAGES.footerGradient}
        alt="hero-bg"
        className="w-full h-full absolute inset-0"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 w-full z-10">
        <Container>
          {/* CTA */}
          {pathname !== "/our-work" &&
            pathname !== "/career" &&
            !pathname.startsWith("/career/job/") &&
            !pathname.startsWith("/case-study/") &&
            pathname !== "/blogs" && (
              <FooterCTA
                setIsStartYourProjectModalOpen={setIsStartYourProjectModalOpen}
              />
            )}

          <div className="flex flex-col xl:flex-row gap-10 lg:gap-15 2xl:gap-0 justify-between mt-15 lg:mt-20 w-full">
            {/* Left column */}
            <div className="max-w-95">
              <p className="text-white">
                We build custom web, app, and AI-powered systems that help
                businesses generate leads, automate operations, and scale
                efficiently.
              </p>
              <div className="flex gap-4 mt-5 lg:mt-10">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 text-xl border border-neutral-97 rounded-full flex items-center justify-center text-white bg-none hover:bg-primary-10 transition duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-15 2xl:gap-0 justify-between 2xl:w-[60%]">
              {/* Important Links Column */}
              <div>
                <h1 className="text-white font-bold leading-normal">
                  Important Links
                </h1>
                <div className="mt-6 lg:mt-6 flex flex-col gap-4">
                  {importantLinks?.map((item) => (
                    <a
                      key={item?.label}
                      href={item?.path}
                      onClick={item?.onClick && item?.onClick}
                      className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit cursor-pointer"
                    >
                      {item?.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Links Column */}
              <div>
                <h1 className="text-white font-bold leading-normal">
                  Services
                </h1>
                <div className="mt-6 lg:mt-6 flex flex-col gap-4">
                  {services?.map((item) => (
                    <a
                      key={item?.label}
                      // href={item?.path}
                      className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit"
                    >
                      {item?.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info Column */}
              <div>
                <h1 className="text-white font-bold leading-normal">
                  Contact Us
                </h1>
                <div className="mt-6 lg:mt-6 flex flex-col gap-4">
                  {contactDetails?.map((item, index) =>
                    item?.href ? (
                      <a
                        key={index}
                        href={item?.href}
                        className={`text-neutral-96 text-[15px] w-fit hover:underline flex gap-4 ${
                          index === 0 ? "items-start" : "items-center"
                        }`}
                      >
                        <img src={item?.icon} alt="" className="size-6" />
                        {item?.text}
                      </a>
                    ) : (
                      <div
                        key={index}
                        className={`text-neutral-96 text-[15px] flex gap-4 ${
                          index === 0 ? "items-start" : "items-center"
                        }`}
                      >
                        <img src={item?.icon} alt="" className="size-6" />
                        {item?.text}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse xl:flex-row justify-between gap-10 lg:gap-14 mt-14">
            <img src={IMAGES.logo} alt="" className="w-full md:w-1/2 mx-auto" />
            {/* Contact Info Column */}
            <div>
              <h1 className="text-white font-bold leading-normal">License</h1>
              <div className="mt-6 lg:mt-6 flex flex-col gap-4">
                {licenseDetails?.map((item, index) => (
                  <div
                    key={index}
                    className={`text-neutral-96 text-[15px] flex gap-4`}
                  >
                    {item?.text}
                  </div>
                ))}
              </div>
            </div>
            <img src={ICONS.footerShape} alt="" className="hidden xl:block" />
          </div>

          <hr className="border border-neutral-98 mt-14 mb-8" />

          <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between gap-3 lg:gap-0">
            <p className="text-neutral-96 text-[15px] leading-6">
              © 2027 PRTeach. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={"/terms-and-conditions"}
                className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit"
              >
                Terms and Conditions
              </a>
              <a
                href={"/privacy-policy"}
                className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </Container>
      </div>

      <StartYourProjectModal
        isModalOpen={isStartYourProjectModalOpen}
        setIsModalOpen={setIsStartYourProjectModalOpen}
      />
    </div>
  );
};

export default Footer;
