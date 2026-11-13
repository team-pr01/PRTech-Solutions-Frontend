import Accordion from "../../Reusable/Accordion/Accordion";
import Container from "../../Reusable/Container/Container";

const CareerFaq = () => {
  const accordingData = [
    {
      title: "How long does the entire hiring process take?",
      description:
        "We respect your time. Most candidates move from initial application to final offer within 10 to 14 business days, with clear feedback after every stage.",
    },
    {
      title: "Do you require degrees or specific pedigrees?",
      description:
        "Not at all. We care about what you can build, how clearly you think through edge cases, and how thoughtfully you collaborate with teammates and clients.",
    },
    {
      title: "What does a typical week look like for engineers and designers?",
      description:
        "We protect 4+ hours of uninterrupted maker time daily. Standups are async, weekly syncs are focused on unblocking architecture and design reviews, and Fridays wrap early for learning or demos.",
    },
    {
      title: "Can I apply if I don't check 100% of the bullet points?",
      description:
        "Yes. Great builders grow into new stacks quickly. If you have strong fundamentals and resonate with how we build custom systems, we want to hear from you.",
    },
    {
      title: "What if none of the current openings match my role?",
      description:
        "Use our 'Send Open Application' button at the bottom of the page. Several of our favorite teammates joined through open applications before a formal role was published.",
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
              Before You{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Apply
              </span>
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

export default CareerFaq;
