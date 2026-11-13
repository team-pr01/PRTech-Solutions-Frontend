import { useMemo, useState } from "react";
import { JOB_OPENINGS } from "../CareerHero/CareerHero";
import JobCard from "./JobCard";

type Department = "All" | "Engineering" | "Design" | "Product" | "Growth & Ops";

type WorkMode = "All" | "Remote" | "Hybrid" | "On-site";

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department>("All");
  const [selectedWorkMode, setSelectedWorkMode] = useState<WorkMode>("All");
  const [searchQuery, setSearchQuery] = useState("");

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
      const department = departments.find((item) => item === job.department);
      if (department && department !== "All") {
        counts[department] += 1;
      }
    });
    return counts;
  }, []);

  const resetFilters = () => {
    setSelectedDepartment("All");
    setSelectedWorkMode("All");
    setSearchQuery("");
  };

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
              <JobCard key={job.id} job={job} />
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
