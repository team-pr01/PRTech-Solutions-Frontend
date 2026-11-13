import Container from "../../Reusable/Container/Container";

const RELATED_JOBS = [
  {
    id: "ai-automation-engineer",
    title: "AI & Workflow Automation Engineer",
    department: "Engineering",
    location: "Remote",
    workMode: "Remote",
    compensation: "$115k – $150k",
  },
  {
    id: "product-designer-systems",
    title: "Lead Product & UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    workMode: "Hybrid",
    compensation: "$110k – $140k + Equity",
  },
  {
    id: "frontend-engineer-motion",
    title: "Frontend Engineer (React & Motion)",
    department: "Engineering",
    location: "Remote",
    workMode: "Remote",
    compensation: "$90k – $120k",
  },
];

const OtherOpenPositions = () => {
    return (
         <section className="sectionPadding border-t border-neutral-10 bg-neutral-71">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
             <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-16 subHeading">Explore More</p>
            </div>
            
            
            <h2 className="heading text-neutral-65 mt-4">
              Other Open{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Positions
              </span>
            </h2>
          </div>

           <button
              type="button"
              className="self-start sm:self-auto text-sm font-semibold text-primary-10 hover:underline"
            >
              View all openings →
            </button>
        </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RELATED_JOBS.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-2xl border border-neutral-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-35 hover:shadow-accordion-card"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary-40 px-3 py-1 text-xs font-semibold text-primary-25">
                    {item.department}
                  </span>
                  <span className="rounded-full border border-neutral-10 bg-neutral-96 px-3 py-1 text-xs font-medium text-neutral-73">
                    {item.workMode}
                  </span>
                </div>

                <h3 className="mt-4 font-Manrope text-lg font-semibold text-neutral-65 transition-colors group-hover:text-primary-10">
                  {item.title}
                </h3>

                <div className="mt-3 text-xs text-neutral-73">
                  {item.location} ·{" "}
                  <span className="font-semibold text-neutral-65">
                    {item.compensation}
                  </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-10">
                  <span>View Role</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
};

export default OtherOpenPositions;