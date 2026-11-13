import Container from "../../Reusable/Container/Container";
import ApplicationForm from "./ApplicationForm";
const job = {
  id: "senior-fullstack-engineer",
  titlePrefix: "Senior Full-Stack",
  titleHighlight: "Systems Engineer",
  department: "Engineering",
  team: "Core Product & Client Systems",
  location: "Remote (Global / Overlapping US-EU Hours)",
  workMode: "Remote",
  employmentType: "Full-time",
  experience: "4+ Years",
  compensation: "$120k – $155k + Equity",
  postedAt: "2 days ago",
  reportsTo: "VP of Engineering",
  summary:
    "Architect and ship custom web platforms, internal automation tools, and high-throughput APIs tailored around real business workflows—never bloated templates.",
  aboutRole: [
    "We partner with ambitious companies to replace fragmented spreadsheets, rigid off-the-shelf SaaS, and manual bottlenecks with custom-engineered digital systems.",
    "As a Senior Full-Stack Systems Engineer, you will work in small, autonomous pods alongside a Lead Product Designer and Technical PM—owning architecture from discovery workshops all the way to production observability.",
  ],
  tags: [
    "TypeScript",
    "React 19",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Redis",
    "AWS",
    "Docker",
  ],
  responsibilities: [
    "Architect and deliver end-to-end web platforms, client portals, and scalable REST/GraphQL APIs from initial discovery to launch.",
    "Design clean relational database schemas, background job queues, and resilient third-party integrations (CRMs, ERPs, billing).",
    "Collaborate directly with product designers to translate complex operational workflows into fast, intuitive React + TypeScript interfaces.",
    "Write thoughtful technical RFCs, uphold pragmatic code quality standards, and mentor mid-level engineers through constructive reviews.",
    "Instrument performance, logging, and automated test suites so every system we ship stays rock-solid in production.",
  ],
  requirements: [
    "4+ years of hands-on production experience with TypeScript, React, and Node.js (or equivalent modern backend stack).",
    "Deep proficiency in PostgreSQL—query optimization, indexing, transactions, and clean data modeling.",
    "Strong product sense: you ask 'why does the user need this?' before writing the first line of code.",
    "Proven track record of owning complex features or entire systems in production.",
    "Clear, empathetic written communication suited to an async-first remote team.",
  ],
  niceToHave: [
    "Experience building multi-tenant SaaS platforms, workflow engines, or AI-assisted automation pipelines.",
    "Familiarity with AWS/Cloudflare infrastructure-as-code and CI/CD automation.",
    "Prior experience in a high-craft digital product studio or early-stage startup.",
  ],
  milestones: [
    {
      phase: "First 30 Days",
      title: "Immerse & Ship",
      detail:
        "Onboard onto our core architecture patterns, shadow discovery calls, and ship your first production feature with a pod.",
    },
    {
      phase: "First 60 Days",
      title: "Own a System",
      detail:
        "Lead technical scoping and database/API architecture for a client platform or internal automation system end-to-end.",
    },
    {
      phase: "First 90 Days",
      title: "Multiply the Team",
      detail:
        "Drive reusable engineering patterns, mentor peers, and help shape engineering standards across the studio.",
    },
  ],
  perks: [
    {
      title: "$2,500 Gear Stipend",
      detail: "Day-one budget for your laptop, monitor, and ergonomic setup.",
    },
    {
      title: "$1,500 Growth Budget",
      detail: "Annual allowance for courses, conferences, books, and AI tools.",
    },
    {
      title: "Async Remote-First",
      detail: "Protected deep-work blocks with minimal recurring meetings.",
    },
    {
      title: "Flexible PTO & Health",
      detail: "Minimum 2 weeks mandatory rest plus full health coverage.",
    },
  ],
};

const JobDescription = () => {
  return (
    <main className="sectionPadding font-Manrope">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* LEFT COLUMN: ROLE DETAILS */}
          <div className="lg:col-span-7 space-y-12">
            {/* About the Role */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                About the Role
              </h2>
              <div className="mt-2 space-y-4 text-sm md:text-base leading-7 text-neutral-73">
                {job.aboutRole.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-neutral-10 bg-white px-3.5 py-1.5 text-xs md:text-sm font-medium text-neutral-70 shadow-industry-tab"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <div className="h-px bg-neutral-10" />

            {/* Responsibilities */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                What You&apos;ll  Build &amp; Own
              </h2>
              <ul className="mt-3 space-y-4">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                What We&apos;re Looking For
              </h2>
              <ul className="mt-3 space-y-4">
                {job.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary-10" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nice to Have */}
            <section className="rounded-2xl border border-neutral-10 bg-neutral-78 p-6 md:p-7">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-65">
                Nice to Have{" "}
                <span className="text-sm font-normal text-neutral-80">
                  (Not Mandatory)
                </span>
              </h3>
              <ul className="mt-4 space-y-3">
                {job.niceToHave.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base leading-6 text-neutral-73"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-25" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Your First 90 Days */}
            <section>
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-primary-10" />
                </div>
                <span className="subHeading text-neutral-70">
                  Growth Roadmap
                </span>
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-65">
                Your First{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-25">
                  90 Days
                </span>
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {job.milestones.map((m) => (
                  <div
                    key={m.phase}
                    className="rounded-2xl border border-neutral-10 bg-gradient-challenge-card p-5 transition-all duration-300 hover:border-primary-35 hover:shadow-accordion-card"
                  >
                    <span className="inline-block rounded-full bg-primary-40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-25">
                      {m.phase}
                    </span>
                    <h3 className="mt-3.5 text-base font-bold text-neutral-65">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm leading-6 text-neutral-73">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Snapshot */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                Benefits &amp; Perks
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {job.perks.map((perk) => (
                  <li
                    key={perk.title}
                    className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{perk.title}</span>
                  </li>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: STICKY SNAPSHOT + APPLICATION FORM */}
          <aside className="lg:col-span-5 lg:sticky lg:top-10">
                        {/* Application Form Card */}
            <ApplicationForm />
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default JobDescription;
