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
    {
      title: "Will I own the source code?",
      description:
        "Yes. Full source code ownership is transferred to you upon project completion. We also provide documentation and can assist with in-house team handover.",
    },
    {
      title: "Do you offer a free consultation?",
      description:
        "Yes. We offer a complimentary 30-minute discovery call to understand your requirements and provide initial guidance on your project feasibility.",
    },
    {
      title: "What happens if I'm not satisfied with the work?",
      description:
        "Client satisfaction is our priority. We provide milestone-based approvals and regular demos. If issues arise, we work diligently to resolve them within the agreed scope.",
    },
    {
      title: "Can you help with scaling my existing application?",
      description:
        "Absolutely. We audit your current architecture, identify bottlenecks, and implement scalable solutions to handle increased users, transactions, or data volume.",
    },
  ];
  return (
    <div className="bg-gradient-faq-bg font-Manrope py-25">
      <Container>
        <div className="flex justify-between gap-20">
          {/* Header */}
          <div className="w-[40%] sticky top-40 self-start">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">FAQ</p>
            </div>

            <h2 className="text-neutral-70 text-[60px] font-semibold leading-15 mt-2.5 max-w-120">
              Frequently{" "}
              <span className="font-Playfair-Display italic font-medium">
                Asked
              </span>{" "}
              <span className="text-primary-10">Questions</span>{" "}
            </h2>
          </div>
          <div className="w-[60%]">
            <Accordion accordingData={accordingData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeFaq;
