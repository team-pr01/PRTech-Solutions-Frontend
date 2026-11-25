/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { FiFilter, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllActiveJobsQuery } from "../../../redux/Features/Job/jobApi";
import type { TJob } from "../../../types/job.type";
import JobCardSkeleton from "../../Skeletons/JobCardSkeleton/JobCardSkeleton";
type WorkMode = "All" | "Remote" | "Hybrid" | "On-site";

export const COMPANY_DEPARTMENTS = [
  "All",
  // Tech & Product
  "Engineering",
  "Software Development",
  "Product",
  "Design",
  "UI/UX",
  "QA & Testing",
  "DevOps & Infrastructure",
  "Data & Analytics",
  "AI & Machine Learning",
  "IT & Support",
  "Cybersecurity",

  // Business & Operations
  "Growth & Ops",
  "Marketing",
  "Digital Marketing",
  "Sales",
  "Business Development",
  "Customer Success",
  "Customer Support",
  "Operations",
  "Project Management",
  "Strategy",

  // Corporate & Admin
  "Human Resources",
  "Recruitment",
  "Finance",
  "Accounting",
  "Legal & Compliance",
  "Administration",
  "Procurement",

  // Physical & On-site
  "Warehouse & Logistics",
  "Manufacturing",
  "Field Operations",
  "Facilities Management",
  "Retail",
  "Quality Assurance (Physical)",

  // Creative & Content
  "Content & Copywriting",
  "Video & Production",
  "Public Relations",
];

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedWorkMode, setSelectedWorkMode] = useState<WorkMode>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { data, isLoading, isFetching } = useGetAllActiveJobsQuery({
    department: selectedDepartment,
    workMode: selectedWorkMode,
    keyword: searchQuery,
  });
  const jobs = data?.data?.jobs || [];

  // Track screen size to force filter bar open on LG+ screens
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const workModes: WorkMode[] = ["All", "Remote", "Hybrid", "On-site"];

  const resetFilters = () => {
    setSelectedDepartment("All");
    setSelectedWorkMode("All");
    setSearchQuery("");
  };

  // Determine if the filter bar should be visible
  const showFilterBar = isDesktop || isFilterOpen;

  return (
    <section
      id="open-positions"
      className="sectionPadding bg-neutral-71 border-t border-neutral-10 font-Manrope"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-3 md:size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1 md:size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase text-xs md:text-base">
                Open Positions
              </p>
            </div>
            <h2 className="heading text-neutral-65 mt-4">
              Find Your{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Next Role
              </span>
            </h2>
            <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 max-w-90 mt-3 leading-normal">
              Explore active opportunities across engineering, product design,
              and strategy. Every role has direct product ownership.
            </p>
          </div>

          {/* Search Box & Mobile Filter Toggle */}
          <div className="w-full lg:w-96 flex gap-3">
            <div className="relative flex-1">
              <label htmlFor="job-search" className="sr-only">
                Search open jobs
              </label>
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

            {/* Mobile/Tablet Filter Button (Hidden on LG and up) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center justify-center w-12 bg-white border border-neutral-10 rounded-full text-neutral-65 shadow-industry-tab shrink-0"
            >
              {isFilterOpen ? <FiX size={20} /> : <FiFilter size={20} />}
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <AnimatePresence initial={false}>
          {showFilterBar && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 32 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-neutral-10 bg-white p-4 shadow-industry-tab">
                {/* Department Tabs */}
                <div className="w-[700px] min-w-0 shrink-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex w-max flex-nowrap items-center gap-2">
                    {COMPANY_DEPARTMENTS?.map((dept) => {
                      const active = selectedDepartment === dept;

                      return (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => setSelectedDepartment(dept)}
                          className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                            active
                              ? "bg-gradient-primary-button text-white shadow-chip"
                              : "bg-neutral-96 text-neutral-73 hover:bg-primary-40 hover:text-primary-25"
                          }`}
                        >
                          {dept}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Work Mode Filter */}
                <div className="flex shrink-0 items-center gap-2 border-t border-neutral-10 pt-3 md:border-t-0 md:pt-0">
                  <span className="mr-1 text-xs font-medium uppercase tracking-wider text-neutral-80">
                    Mode:
                  </span>

                  {workModes.map((mode) => {
                    const active = selectedWorkMode === mode;

                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setSelectedWorkMode(mode)}
                        className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between text-sm text-neutral-73">
          <span>
            Showing{" "}
            <strong className="font-semibold text-neutral-65">
              {jobs?.length}
            </strong>{" "}
            {jobs?.length === 1 ? "opening" : "openings"}
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

        {isLoading || isFetching ? (
          <div className="mt-5 grid grid-cols-1 gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        ) : jobs?.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5">
            {jobs.map((job: TJob) => (
              <JobCard key={job?.jobId} job={job} />
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
                className="rounded-full bg-gradient-primary-button px-5 py-2.5 text-sm font-semibold text-white shadow-chip"
              >
                Send Open Application
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
