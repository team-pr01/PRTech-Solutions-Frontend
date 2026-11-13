import React, { useRef, useState } from "react";
import JobDetailsHero from "../../components/JobDetailsPage/JobDetailsHero/JobDetailsHero";

export interface JobDetailData {
  id: string;
  titlePrefix: string;
  titleHighlight: string;
  department: string;
  team: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Contract";
  experience: string;
  compensation: string;
  postedAt: string;
  reportsTo: string;
  summary: string;
  aboutRole: string[];
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  milestones: {
    phase: string;
    title: string;
    detail: string;
  }[];
  perks: {
    title: string;
    detail: string;
  }[];
}

interface RelatedJob {
  id: string;
  title: string;
  department: string;
  location: string;
  workMode: string;
  compensation: string;
}

interface JobDetailsProps {
  job?: JobDetailData;
  onBack?: () => void;
  onSelectRelatedJob?: (jobId: string) => void;
}

const DEFAULT_JOB: JobDetailData = {
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

const RELATED_JOBS: RelatedJob[] = [
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

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  linkedinUrl: string;
  experienceYears: string;
  noticePeriod: string;
  coverNote: string;
  resumeFileName: string;
}

const INITIAL_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  portfolioUrl: "",
  linkedinUrl: "",
  experienceYears: "4-6 years",
  noticePeriod: "2 weeks",
  coverNote: "",
  resumeFileName: "",
};

const JobDetails: React.FC<JobDetailsProps> = ({
  job = DEFAULT_JOB,
  onBack,
  onSelectRelatedJob,
}) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const applySectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Clipboard fallback ignored if blocked in non-HTTPS contexts
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleFileSelect = (file?: File) => {
    if (!file) return;
    setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    setErrors((prev) => ({ ...prev, resumeFileName: undefined }));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFileSelect(file);
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.portfolioUrl.trim() && !formData.linkedinUrl.trim()) {
      nextErrors.portfolioUrl =
        "Please provide your GitHub, Portfolio, or LinkedIn URL.";
    }
    if (!formData.resumeFileName.trim()) {
      nextErrors.resumeFileName = "Please upload your resume or CV.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-40 font-Manrope text-neutral-65 selection:bg-primary-10 selection:text-white">
      <JobDetailsHero/>

      {/* ==================== 2. MAIN TWO-COLUMN CONTENT ==================== */}
      <main className="sectionPadding ">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* LEFT COLUMN: ROLE DETAILS */}
            <div className="lg:col-span-7 space-y-12">
              {/* About the Role */}
              <section>
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                    <div className="size-1.5 rounded-full bg-primary-10" />
                  </div>
                  <span className="subHeading text-neutral-70">
                    The Opportunity
                  </span>
                </div>
                <h2 className="mt-2 font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
                  About the{" "}
                  <span className="font-Playfair-Display italic font-medium text-primary-25">
                    Role
                  </span>
                </h2>
                <div className="mt-4 space-y-4 text-sm md:text-base leading-7 text-neutral-73">
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
                <h2 className="font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
                  What You&apos;ll{" "}
                  <span className="font-Playfair-Display italic font-medium text-primary-25">
                    Build &amp; Own
                  </span>
                </h2>
                <ul className="mt-5 space-y-4">
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
                <h2 className="font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
                  What We&apos;re{" "}
                  <span className="font-Playfair-Display italic font-medium text-primary-25">
                    Looking For
                  </span>
                </h2>
                <ul className="mt-5 space-y-4">
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
                <h3 className="font-Manrope text-lg md:text-xl font-semibold text-neutral-65">
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
                <h2 className="mt-2 font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
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
                      <h3 className="mt-3.5 font-Manrope text-base font-bold text-neutral-65">
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
                <h2 className="font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
                  Benefits &amp;{" "}
                  <span className="font-Playfair-Display italic font-medium text-primary-25">
                    Perks
                  </span>
                </h2>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {job.perks.map((perk) => (
                    <div
                      key={perk.title}
                      className="rounded-2xl border border-neutral-10 bg-white p-5 shadow-industry-tab"
                    >
                      <h3 className="font-Manrope text-base font-semibold text-neutral-65">
                        {perk.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-neutral-73">
                        {perk.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: STICKY SNAPSHOT + APPLICATION FORM */}
            <aside
              ref={applySectionRef}
              className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
            >
              {/* Role Summary Mini Card */}
              <div className="rounded-2xl border border-neutral-10 bg-gradient-project-metrics-bg p-6 shadow-industry-tab">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-25">
                    Role Snapshot
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-65 border border-neutral-10">
                    <span className="h-2 w-2 rounded-full bg-primary-10" />
                    Actively Reviewing
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-xs text-neutral-80">Reports To</dt>
                    <dd className="mt-0.5 font-semibold text-neutral-65">
                      {job.reportsTo}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-neutral-80">Response SLA</dt>
                    <dd className="mt-0.5 font-semibold text-neutral-65">
                      Within 48 hours
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Application Form Card */}
              <div className="overflow-hidden rounded-3xl border border-primary-35/60 bg-white shadow-accordion-card">
                <div className="border-b border-neutral-10 bg-neutral-78 px-6 py-5">
                  <h2 className="font-Manrope text-xl font-bold text-neutral-65">
                    Apply for this Position
                  </h2>
                  <p className="mt-1 text-xs text-neutral-73">
                    Takes ~2 minutes · Reviewed personally by engineering &amp;
                    hiring leads.
                  </p>
                </div>

                <div className="p-6">
                  {isSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-4 font-Manrope text-xl font-bold text-neutral-65">
                        Application Submitted!
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-73">
                        Thanks for applying to{" "}
                        <strong className="text-neutral-65">
                          {job.titlePrefix} {job.titleHighlight}
                        </strong>
                        . We&apos;ve sent a confirmation to{" "}
                        <span className="font-medium text-neutral-65">
                          {formData.email}
                        </span>{" "}
                        and will follow up within 48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData(INITIAL_FORM);
                        }}
                        className="mt-6 rounded-full border border-neutral-10 px-5 py-2.5 text-xs font-semibold text-neutral-65 hover:border-primary-10"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="jd-fullName"
                          className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                        >
                          Full Name *
                        </label>
                        <input
                          id="jd-fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          placeholder="Jordan Taylor"
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-warning-10">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="jd-email"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                          >
                            Email *
                          </label>
                          <input
                            id="jd-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="jordan@email.com"
                            className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-warning-10">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="jd-phone"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                          >
                            Phone
                          </label>
                          <input
                            id="jd-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+1 (555) 000-0000"
                            className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="jd-portfolio"
                          className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                        >
                          GitHub / Portfolio URL *
                        </label>
                        <input
                          id="jd-portfolio"
                          type="url"
                          value={formData.portfolioUrl}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              portfolioUrl: e.target.value,
                            })
                          }
                          placeholder="https://github.com/username"
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
                        {errors.portfolioUrl && (
                          <p className="mt-1 text-xs text-warning-10">
                            {errors.portfolioUrl}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="jd-linkedin"
                          className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                        >
                          LinkedIn URL
                        </label>
                        <input
                          id="jd-linkedin"
                          type="url"
                          value={formData.linkedinUrl}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              linkedinUrl: e.target.value,
                            })
                          }
                          placeholder="https://linkedin.com/in/username"
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="jd-exp"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                          >
                            Experience
                          </label>
                          <select
                            id="jd-exp"
                            value={formData.experienceYears}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                experienceYears: e.target.value,
                              })
                            }
                            className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-3.5 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                          >
                            <option value="1-3 years">1–3 years</option>
                            <option value="4-6 years">4–6 years</option>
                            <option value="7+ years">7+ years</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="jd-notice"
                            className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                          >
                            Availability
                          </label>
                          <select
                            id="jd-notice"
                            value={formData.noticePeriod}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                noticePeriod: e.target.value,
                              })
                            }
                            className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-3.5 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                          >
                            <option value="Immediate">Immediate</option>
                            <option value="2 weeks">2 weeks</option>
                            <option value="30 days">30 days</option>
                            <option value="60+ days">60+ days</option>
                          </select>
                        </div>
                      </div>

                      {/* Resume Drag & Drop */}
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-70">
                          Resume / CV *
                        </span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) =>
                            handleFileSelect(e.target.files?.[0])
                          }
                          className="hidden"
                        />
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              fileInputRef.current?.click();
                            }
                          }}
                          className={`mt-1.5 cursor-pointer rounded-xl border border-dashed p-4 text-center transition-colors ${
                            isDragging
                              ? "border-primary-10 bg-primary-40"
                              : "border-primary-35 bg-neutral-78 hover:bg-primary-40/60"
                          }`}
                        >
                          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary-10 shadow-industry-tab">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.8}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0-12l-4 4m4-4l4 4"
                              />
                            </svg>
                          </div>
                          <p className="mt-2 text-xs font-semibold text-neutral-65 truncate px-2">
                            {formData.resumeFileName ||
                              "Drop your resume here or click to browse"}
                          </p>
                          <p className="mt-0.5 text-[11px] text-neutral-80">
                            PDF, DOC, DOCX up to 10MB
                          </p>
                        </div>
                        {errors.resumeFileName && (
                          <p className="mt-1 text-xs text-warning-10">
                            {errors.resumeFileName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="jd-note"
                          className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                        >
                          Why this role? (Optional)
                        </label>
                        <textarea
                          id="jd-note"
                          rows={3}
                          value={formData.coverNote}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              coverNote: e.target.value,
                            })
                          }
                          placeholder="Share a link or quick note on a system you're proud of building..."
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-primary-button py-3.5 text-sm font-semibold text-white shadow-chip transition-all hover:brightness-110"
                      >
                        Submit Application
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ==================== 3. OTHER OPEN ROLES ==================== */}
      <section className="sectionPadding border-t border-neutral-10 bg-neutral-71">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="subHeading text-primary-10">Explore More</span>
              <h2 className="mt-1.5 font-Manrope text-2xl md:text-3xl font-semibold text-neutral-65">
                Other Open{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-25">
                  Positions
                </span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onBack) onBack();
                else window.history.back();
              }}
              className="self-start sm:self-auto text-sm font-semibold text-primary-10 hover:underline"
            >
              View all openings →
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RELATED_JOBS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRelatedJob?.(item.id)}
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
        </div>
      </section>

      {/* ==================== 4. BOTTOM HIRING PROMISE STRIP ==================== */}
      <section className="bg-gradient-start-project py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-Manrope text-lg md:text-xl font-semibold text-white">
              Have a question about this role before applying?
            </h3>
            <p className="mt-1 text-sm text-neutral-93">
              Reach out directly to our talent team—no automated bots, real
              answers within 1 business day.
            </p>
          </div>
          <a
            href="mailto:careers@company.com"
            className="shrink-0 rounded-full border border-neutral-83 bg-neutral-15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary-35 hover:bg-neutral-81"
          >
            careers@company.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;