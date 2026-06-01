import {
  FaCode,
  FaCloud,
  FaMobile,
  FaRocket,
  FaPlug,
  FaDesktop,
} from "react-icons/fa";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { Link } from "react-router-dom";

const expertiseData = [
  {
    id: "01",
    title: "Custom Web Development",
    description:
      "High-performance websites built for real users — fast loading, SEO-ready, and designed to scale as your business grows.",
    icon: FaCode,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
  {
    id: "02",
    title: "SaaS & Platform Development",
    description:
      "Architecture-first development for SaaS products and multi-user platforms designed to support growth without painful rewrites.",
    icon: FaCloud,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
  {
    id: "03",
    title: "Web Applications & Internal Tools",
    description:
      "Secure, scalable web applications and admin dashboards built to handle real-world workflows and operational complexity.",
    icon: FaDesktop,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
  {
    id: "04",
    title: "API & System Integration",
    description:
      "Reliable integrations between services, third-party APIs, and internal systems — built for stability, security, and scale.",
    icon: FaPlug,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
  {
    id: "05",
    title: "Mobile App Development (Android & iOS)",
    description:
      "Production-ready mobile apps focused on usability, performance, and long-term maintainability — not quick MVP shortcuts.",
    icon: FaMobile,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
  {
    id: "06",
    title: "Performance Optimization & Scalability Planning",
    description:
      "Improving real-world speed, Core Web Vitals, and system scalability so products perform well under real usage.",
    icon: FaRocket,
    iconBg: "bg-primary-30",
    iconColor: "text-primary-10",
  },
];

const OurExpertise = () => {
  return (
    <div className="sectionPadding bg-gradient-latest-project-bg font-Manrope">
      <Container>
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-neutral-70 subHeading">Our Expertise</p>
          </div>

          <h2 className="text-neutral-70 heading mt-2.5">
            Expertise Across{" "}
            <span className="text-primary-10">Web & Application</span>{" "}
            <span className="font-Playfair-Display italic font-medium">
              Development
            </span>
          </h2>

          <p className="description text-neutral-80 max-w-179 mx-auto mt-4 2xl:mt-6">
            We work across the full product lifecycle — from early-stage
            planning to scalable, production-ready systems.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 2xl:gap-7.5 mt-10 xl:mt-14 2xl:mt-18">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 lg:p-8 border border-neutral-91 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`text-2xl ${item.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-neutral-70 text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: CTA at bottom */}
        <div className="flex justify-center mt-5 xl:mt-8 2xl:mt-14">
          <Link to="/contact-us">
            <Button label="Build Yours" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurExpertise;
