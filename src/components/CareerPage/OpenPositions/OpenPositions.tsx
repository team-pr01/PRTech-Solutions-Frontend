/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useRef, useState } from "react";
import { JOB_OPENINGS } from "../CareerHero/CareerHero";

type Department = "All" | "Engineering" | "Design" | "Product" | "Growth & Ops";

type WorkMode = "All" | "Remote" | "Hybrid" | "On-site";

interface JobOpening {
  id: string;
  title: string;
  department: Exclude<Department, "All">;
  location: string;
  workMode: Exclude<WorkMode, "All">;
  employmentType: "Full-time" | "Contract";
  experience: string;
  compensation: string;
  postedAt: string;
  featured?: boolean;
  summary: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const INITIAL_FORM_STATE: any = {
  fullName: "",
  email: "",
  phone: "",
  portfolioUrl: "",
  linkedinUrl: "",
  experienceYears: "3-5 years",
  coverNote: "",
  resumeFileName: "",
};

const OpenPositions = () => {
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [isApplyMode, setIsApplyMode] = useState(false);
  const [isGeneralApplyOpen, setIsGeneralApplyOpen] = useState(false);
  const [submittedRoleTitle, setSubmittedRoleTitle] = useState<string | null>(
    null,
  );
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department>("All");
  const [selectedWorkMode, setSelectedWorkMode] = useState<WorkMode>("All");
  const [searchQuery, setSearchQuery] = useState("");

     const [formData, setFormData] =
        useState<any>(INITIAL_FORM_STATE);
      const [formErrors, setFormErrors] = useState<
        Partial<Record<keyof any, string>>
      >({});

  const departments: Department[] = [
    "All",
    "Engineering",
    "Design",
    "Product",
    "Growth & Ops",
  ];
  const workModes: WorkMode[] = ["All", "Remote", "Hybrid", "On-site"];

  const filteredJobs = useMemo(() => {
   
    const query = searchQuery.trim().toLowerCase();
    return JOB_OPENINGS.filter((job) => {
      const matchesDept =
        selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesMode =
        selectedWorkMode === "All" || job.workMode === selectedWorkMode;
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.summary.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesDept && matchesMode && matchesQuery;
    });
  }, [selectedDepartment, selectedWorkMode, searchQuery]);

  const departmentCounts = useMemo(() => {
    const counts: Record<Department, number> = {
      All: JOB_OPENINGS.length,
      Engineering: 0,
      Design: 0,
      Product: 0,
      "Growth & Ops": 0,
    };
    JOB_OPENINGS.forEach((job) => {
      counts[job.department] += 1;
    });
    return counts;
  }, []);

  const openJobModal = (job: JobOpening, directToApply = false) => {
    setActiveJob(job);
    setIsApplyMode(directToApply);
    setIsGeneralApplyOpen(false);
    setSubmittedRoleTitle(null);
  };
  const resetFilters = () => {
    setSelectedDepartment("All");
    setSelectedWorkMode("All");
    setSearchQuery("");
  };

  const openGeneralApplyModal = () => {
    setActiveJob(null);
    setIsApplyMode(true);
    setIsGeneralApplyOpen(true);
    setSubmittedRoleTitle(null);
  };

  const closeAllModals = () => {
    setActiveJob(null);
    setIsApplyMode(false);
    setIsGeneralApplyOpen(false);
    setSubmittedRoleTitle(null);
  };


  const isModalOpen = Boolean(activeJob) || isGeneralApplyOpen;
  return (
    <section
      id="open-positions"
      className="sectionPadding bg-neutral-71 border-t border-neutral-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="subHeading inline-block rounded-full bg-primary-30 px-4 py-1.5 text-primary-10 text-sm">
              Open Positions
            </span>
            <h2 className="heading text-neutral-65 mt-4">
              Find Your{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Next Role
              </span>
            </h2>
            <p className="description text-neutral-73! mt-3 max-w-xl">
              Explore active opportunities across engineering, product design,
              and strategy. Every role has direct product ownership.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-96">
            <label htmlFor="job-search" className="sr-only">
              Search open jobs
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                id="job-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, React, Figma, remote..."
                className="w-full rounded-full border border-neutral-10 bg-white py-3 pl-11 pr-10 text-sm text-neutral-65 placeholder:text-neutral-80 shadow-industry-tab focus:border-primary-10 focus:outline-none focus:ring-2 focus:ring-primary-30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-80 hover:bg-neutral-96 hover:text-neutral-65"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-neutral-10 bg-white p-4 shadow-industry-tab">
          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {departments.map((dept) => {
              const active = selectedDepartment === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDepartment(dept)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                    active
                      ? "bg-gradient-primary-button text-white shadow-chip"
                      : "bg-neutral-96 text-neutral-73 hover:bg-primary-40 hover:text-primary-25"
                  }`}
                >
                  <span>{dept}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-neutral-10/60 text-neutral-73"
                    }`}
                  >
                    {departmentCounts[dept]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Work Mode Filter */}
          <div className="flex items-center gap-2 border-t border-neutral-10 pt-3 md:border-t-0 md:pt-0">
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-80 mr-1">
              Mode:
            </span>
            {workModes.map((mode) => {
              const active = selectedWorkMode === mode;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setSelectedWorkMode(mode)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-neutral-65 text-white"
                      : "bg-neutral-96 text-neutral-73 hover:bg-neutral-10/50"
                  }`}
                >
                  {mode}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between text-sm text-neutral-73">
          <span>
            Showing{" "}
            <strong className="font-semibold text-neutral-65">
              {filteredJobs.length}
            </strong>{" "}
            {filteredJobs.length === 1 ? "opening" : "openings"}
          </span>
          {(selectedDepartment !== "All" ||
            selectedWorkMode !== "All" ||
            searchQuery) && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-primary-10 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Job Listings Grid / List */}
        {filteredJobs.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group relative rounded-2xl border border-neutral-10 bg-white p-6 md:p-7 transition-all duration-300 hover:border-primary-35 hover:shadow-accordion-card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-primary-40 px-3 py-1 text-xs font-semibold text-primary-25">
                        {job.department}
                      </span>
                      <span className="rounded-full border border-neutral-10 bg-neutral-96 px-3 py-1 text-xs font-medium text-neutral-73">
                        {job.workMode}
                      </span>
                      {job.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-65 px-3 py-1 text-xs font-medium text-primary-35">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-35" />
                          Priority Hiring
                        </span>
                      )}
                      <span className="text-xs text-neutral-80">
                        Posted {job.postedAt}
                      </span>
                    </div>

                    <h3
                      onClick={() => openJobModal(job, false)}
                      className="mt-3.5 cursor-pointer font-Manrope text-xl md:text-2xl font-semibold text-neutral-65 transition-colors group-hover:text-primary-10"
                    >
                      {job.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-73">
                      {job.summary}
                    </p>

                    {/* Metadata + Tags */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-neutral-77">
                      <span className="inline-flex items-center gap-1.5">
                        <svg
                          className="h-4 w-4 text-primary-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg
                          className="h-4 w-4 text-primary-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.employmentType} · {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-neutral-65">
                        <svg
                          className="h-4 w-4 text-primary-10"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.compensation}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-neutral-10 bg-neutral-78 px-2.5 py-1 text-xs font-medium text-neutral-70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-start gap-3 shrink-0 border-t border-neutral-10 pt-4 lg:border-t-0 lg:pt-0">
                    <button
                      type="button"
                      onClick={() => openJobModal(job, true)}
                      className="flex-1 lg:flex-none w-full lg:w-40 rounded-full bg-gradient-primary-button px-5 py-2.5 text-sm font-semibold text-white shadow-chip transition-all hover:brightness-110"
                    >
                      Apply Now
                    </button>
                    <button
                      type="button"
                      onClick={() => openJobModal(job, false)}
                      className="flex-1 lg:flex-none w-full lg:w-40 rounded-full border border-neutral-10 bg-white px-5 py-2.5 text-sm font-medium text-neutral-65 transition-colors hover:border-primary-10 hover:bg-primary-40/50 hover:text-primary-25"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-8 rounded-2xl border border-dashed border-neutral-10 bg-white px-6 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-40 text-primary-10">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-Manrope text-xl font-semibold text-neutral-65">
              No matching openings right now
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-neutral-73">
              Try adjusting your department or search filters—or send us an open
              application so we can reach out when a match opens up.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-full border border-neutral-10 bg-white px-5 py-2.5 text-sm font-medium text-neutral-65 hover:border-primary-10"
              >
                Clear Filters
              </button>
              <button
                type="button"
                onClick={openGeneralApplyModal}
                className="rounded-full bg-gradient-primary-button px-5 py-2.5 text-sm font-semibold text-white shadow-chip"
              >
                Send Open Application
              </button>
            </div>
          </div>
        )}
      </div>



       {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-16/75 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeAllModals();
          }}
        >
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-neutral-10 bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-10 bg-gradient-project-metrics-bg px-6 py-5 md:px-8">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary-10 px-3 py-0.5 text-xs font-semibold text-white">
                    {activeJob ? activeJob.department : "General Talent Pool"}
                  </span>
                  {activeJob && (
                    <span className="rounded-full bg-white px-3 py-0.5 text-xs font-medium text-neutral-70 border border-neutral-10">
                      {activeJob.location} · {activeJob.compensation}
                    </span>
                  )}
                </div>
                <h3 className="mt-2.5 font-Manrope text-xl md:text-2xl font-bold text-neutral-65">
                  {activeJob ? activeJob.title : "Open / General Application"}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeAllModals}
                aria-label="Close modal"
                className="rounded-full border border-neutral-10 bg-white p-2 text-neutral-73 transition-colors hover:bg-neutral-96 hover:text-neutral-65"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-6 py-6 md:px-8">
              {submittedRoleTitle ? (
                /* Success Confirmation View */
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                    <svg
                      className="h-8 w-8"
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
                  <h4 className="mt-5 font-Manrope text-2xl font-bold text-neutral-65">
                    Application Received!
                  </h4>
                  <p className="mx-auto mt-2.5 max-w-md text-sm leading-6 text-neutral-73">
                    Thank you for applying for{" "}
                    <strong className="text-neutral-65">
                      {submittedRoleTitle}
                    </strong>
                    . Our hiring team reviews every submission personally and
                    will reach out within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className="mt-7 rounded-full bg-gradient-primary-button px-7 py-3 text-sm font-semibold text-white shadow-chip"
                  >
                    Back to Careers
                  </button>
                </div>
              ) : isApplyMode ? (
                /* Application Form View */
                <form
                  noValidate
                  className="space-y-5"
                >
                  {activeJob && (
                    <button
                      type="button"
                      onClick={() => setIsApplyMode(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-10 hover:underline"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Back to Job Description
                    </button>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-xs text-warning-10">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@domain.com"
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-warning-10">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 234-5678"
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="experienceYears"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        Years of Experience
                      </label>
                      <select
                        id="experienceYears"
                        value={formData.experienceYears}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experienceYears: e.target.value,
                          })
                        }
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      >
                        <option value="1-2 years">1–2 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5-8 years">5–8 years</option>
                        <option value="8+ years">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="portfolioUrl"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        Portfolio / GitHub URL *
                      </label>
                      <input
                        id="portfolioUrl"
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            portfolioUrl: e.target.value,
                          })
                        }
                        placeholder="https://github.com/username"
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      />
                      {formErrors.portfolioUrl && (
                        <p className="mt-1 text-xs text-warning-10">
                          {formErrors.portfolioUrl}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="linkedinUrl"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                      >
                        LinkedIn URL
                      </label>
                      <input
                        id="linkedinUrl"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            linkedinUrl: e.target.value,
                          })
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-70">
                      Resume / CV (PDF or DOCX) *
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <button
                      type="button"
                      className="mt-1.5 flex w-full items-center justify-between rounded-xl border border-dashed border-primary-35 bg-neutral-78 px-4 py-3.5 text-left transition-colors hover:bg-primary-40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary-10 shadow-industry-tab">
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
                        <div>
                          <div className="text-sm font-medium text-neutral-65">
                            {formData.resumeFileName ||
                              "Click to upload your resume"}
                          </div>
                          <div className="text-xs text-neutral-80">
                            Max 10MB · PDF, DOC, DOCX
                          </div>
                        </div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-25 border border-neutral-10">
                        {formData.resumeFileName ? "Replace" : "Browse"}
                      </span>
                    </button>
                    {formErrors.resumeFileName && (
                      <p className="mt-1 text-xs text-warning-10">
                        {formErrors.resumeFileName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="coverNote"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-70"
                    >
                      What&apos;s one system or product you&apos;re proud of
                      building?
                    </label>
                    <textarea
                      id="coverNote"
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) =>
                        setFormData({ ...formData, coverNote: e.target.value })
                      }
                      placeholder="Tell us briefly about your role, a tough problem you solved, or why you'd love to join..."
                      className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 border-t border-neutral-10 pt-5">
                    <button
                      type="button"
                      onClick={closeAllModals}
                      className="rounded-full border border-neutral-10 px-5 py-2.5 text-sm font-medium text-neutral-73 hover:bg-neutral-96"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-gradient-primary-button px-7 py-2.5 text-sm font-semibold text-white shadow-chip transition-all hover:brightness-110"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              ) : (
                /* Job Description Details View */
                activeJob && (
                  <div className="space-y-6">
                    <p className="text-sm md:text-base leading-7 text-neutral-73">
                      {activeJob.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeJob.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-neutral-10 bg-neutral-78 px-3 py-1 text-xs font-medium text-neutral-70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-Manrope text-base font-bold text-neutral-65">
                        What You&apos;ll Build &amp; Own
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {activeJob.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-6 text-neutral-73"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-10" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-Manrope text-base font-bold text-neutral-65">
                        What We&apos;re Looking For
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {activeJob.requirements.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-6 text-neutral-73"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-10" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeJob.niceToHave.length > 0 && (
                      <div>
                        <h4 className="font-Manrope text-base font-bold text-neutral-65">
                          Bonus Points
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {activeJob.niceToHave.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-6 text-neutral-73"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-35" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-primary-35/50 bg-primary-40/60 p-5">
                      <div>
                        <div className="text-sm font-semibold text-neutral-65">
                          Ready to build with us?
                        </div>
                        <div className="text-xs text-neutral-73">
                          Takes under 2 minutes · Reviewed personally in 48 hrs
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsApplyMode(true)}
                        className="w-full sm:w-auto rounded-full bg-gradient-primary-button px-7 py-3 text-sm font-semibold text-white shadow-chip transition-all hover:brightness-110"
                      >
                        Apply for this Role
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OpenPositions;
