import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { PiInstagramLogoFill } from "react-icons/pi";
import Button from "../../Reusable/Button/Button";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation().pathname;
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/prtech-solutions",
      icon: <FaLinkedin />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/prtechsolutions",
      icon: <FaFacebookSquare />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prtechsolutions",
      icon: <PiInstagramLogoFill />,
    },
  ];
  const importantLinks = [
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Services",
      path: "/services",
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
  ];
  const services = [
    {
      label: "Web Development",
      path: "/about-us",
    },
    {
      label: "Mobile App Development",
      path: "/terms-and-conditions",
    },
    {
      label: "UI/UX Design",
      path: "/privacy-policy",
    },
    {
      label: "AI Development",
      path: "/privacy-policy",
    },
    {
      label: "SaaS Development",
      path: "/refund-cancellation-policy",
    },
    {
      label: "AI Automation",
      path: "/services",
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
          {pathname !== "/our-work" && (
            <div className="relative h-100 font-medium overflow-hidden font-Manrope rounded-2xl">
              <img
                src={IMAGES.ctaBg2}
                alt=""
                className="w-full h-full absolute inset-0 object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Container>
                  <div className="text-center flex flex-col items-center justify-center">
                    <h2 className="text-white text-center text-[48px] font-semibold leading-12 max-w-230 mx-auto">
                      Ready to Build a System That Actually Grows Your Business?
                    </h2>

                    <p className="text-white font-Manrope leading-8 max-w-120 mx-auto font-normal mt-6">
                      We don't just build websites — we create systems that
                      generate leads, automate operations, and help you scale
                      faster.
                    </p>

                    <div className="flex items-center justify-center gap-6 mt-6">
                      <Button variant="secondary" label="Let's Get Started" />
                      <Button variant="tertiary" label="See Our Services" />
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          )}

          <div className="flex flex-col xl:flex-row gap-15 xl:gap-0 justify-between mt-20">
            {/* Left column */}
            <div>
              <p className="text-white max-w-95">
                We build custom web, app, and AI-powered systems that help
                businesses generate leads, automate operations, and scale
                efficiently.
              </p>
              <div className="flex gap-4 mt-10">
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

            {/* Important Links Column */}
            <div>
              <h1 className="text-white font-bold leading-normal">
                Important Links
              </h1>
              <div className="mt-6 flex flex-col gap-4">
                {importantLinks?.map((item) => (
                  <a
                    key={item?.label}
                    href={item?.path}
                    className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit"
                  >
                    {item?.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links Column */}
            <div>
              <h1 className="text-white font-bold leading-normal">Services</h1>
              <div className="mt-6 flex flex-col gap-4">
                {services?.map((item) => (
                  <a
                    key={item?.label}
                    href={item?.path}
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
              <div className="mt-8 flex flex-col gap-4">
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

          <div className="grid grid-cols-3 gap-14 mt-14">
            <img src={IMAGES.logo} alt="" />
            {/* Contact Info Column */}
            <div>
              <h1 className="text-white font-bold leading-normal">License</h1>
              <div className="mt-8 flex flex-col gap-4">
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
            <img src={ICONS.footerShape} alt="" />
          </div>

          <hr className="border border-neutral-98 mt-14 mb-8" />

          <div className="flex justify-between">
            <p className="text-neutral-96 text-[15px] leading-6 hover:underline w-fit">
              © 2026 PRTeach. All rights reserved.
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
    </div>
  );
};

export default Footer;
