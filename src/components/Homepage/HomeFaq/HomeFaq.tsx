import Accordion from "../../Reusable/Accordion/Accordion";
import Container from "../../Reusable/Container/Container";

const HomeFaq = () => {
  const accordingData = [
    {
      title: "What types of software solutions do you build?",
      description:
        "We specialize in custom web and mobile applications, AI-powered systems, workflow automation platforms, marketplace solutions, and enterprise-grade software tailored to your specific business needs.",
    },
    {
      title: "How long does it take to build a custom software solution?",
      description:
        "Timelines vary based on project complexity. A typical MVP (Minimum Viable Product) takes 8-12 weeks, while enterprise solutions may take 4-6 months. We provide detailed timelines during project discovery.",
    },
    {
      title: "Do you offer ongoing maintenance and support?",
      description:
        "Yes. We provide post-launch maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support team is available 24/7 for critical issues.",
    },
    {
      title: "What is your development process?",
      description:
        "We follow an agile development process: Discovery → Design → Development → Testing → Deployment → Maintenance. You get full visibility with weekly demos and progress updates.",
    },
    {
      title: "Do you sign NDAs and protect intellectual property?",
      description:
        "Absolutely. We sign NDAs before any discussion. All code, designs, and intellectual property developed for your project is 100% yours upon final payment.",
    },
    {
      title: "What technologies do you specialize in?",
      description:
        "We specialize in React, Next.js, Node.js, Python, TypeScript, Tailwind CSS, AI/ML integration, cloud platforms (AWS, Azure, GCP), and modern database solutions.",
    },
    {
      title: "Can you integrate with my existing systems?",
      description:
        "Yes. We build custom APIs and integrate with third-party services including CRMs, ERPs, payment gateways, marketing tools, and legacy systems.",
    },
    {
      title: "How do you price your services?",
      description:
        "We offer flexible pricing models: fixed-cost for defined scope, hourly for ongoing work, or dedicated team monthly retainers. We provide transparent quotes with no hidden fees.",
    },
  ];
  return (
    <div className="bg-gradient-faq-bg font-Manrope py-12 md:py-18 2xl:py-25">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-14 2xl:gap-20">
          {/* Header */}
          <div className="w-full lg:w-[40%] block lg:sticky top-40 self-start">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">FAQ</p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5 max-w-120">
              Frequently{" "}
              <span className="font-Playfair-Display italic font-medium">
                Asked
              </span>{" "}
              <span className="text-primary-10">Questions</span>{" "}
            </h2>
          </div>
          <div className="w-full lgw-[60%]">
            <Accordion accordingData={accordingData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeFaq;
