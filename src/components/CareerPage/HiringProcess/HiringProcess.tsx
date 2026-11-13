import React, { useState } from "react";

interface HiringStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
}

const HIRING_STEPS: HiringStep[] = [
  {
    step: "01",
    title: "Application & Craft Review",
    duration: "Within 48 hours",
    description:
      "Real engineers and designers—not automated keyword filters—review your work, portfolio, or GitHub.",
    outcome: "Personal review by a domain lead",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "30-Min Intro Conversation",
    duration: "Casual & Mutual",
    description:
      "Meet our hiring lead to align on how we build, your career goals, compensation range, and team culture.",
    outcome: "Clear mutual fit & role expectations",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Practical System Session",
    duration: "Paid / Real-World",
    description:
      "No trick whiteboard algorithms. Walk through a past system you built or pair on a realistic challenge.",
    outcome: "Collaborative architecture & craft sync",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Leadership Sync & Offer",
    duration: "Same-Week Decision",
    description:
      "Meet the founders, clarify your 90-day impact roadmap, and receive a clear, transparent offer.",
    outcome: "Transparent offer & onboarding plan",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

const HiringProcess: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="sectionPadding relative overflow-hidden bg-gradient-key-solution-card text-white">
      {/* Ambient Background Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-180 -translate-x-1/2 rounded-full bg-primary-10/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(152, 221, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 25%, black 80%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
           <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading"> How We Hire</p>
            </div>

          <h2 className="heading mt-4 text-white">
            A Hiring Process{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              Built on Respect
            </span>
          </h2>

          <p className="description mx-auto mt-4 max-w-2xl text-neutral-99/80">
            No ghosting, no trick algorithm puzzles, and no 7-round gauntlet.
            Just four transparent steps from first review to offer.
          </p>
        </div>

        {/* Desktop Linear Progress Rail */}
        <div className="mt-14 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-6">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-neutral-83"
            />
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-primary-10 via-primary-35 to-primary-10 transition-all duration-500"
              style={{
                width: `${(activeIndex / (HIRING_STEPS.length - 1)) * 75}%`,
              }}
            />

            {HIRING_STEPS.map((item, idx) => {
              const isPassedOrActive = idx <= activeIndex;
              const isActive = idx === activeIndex;
              return (
                <div key={item.step} className="relative flex justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    aria-label={`Highlight step ${item.step}: ${item.title}`}
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-Manrope text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-primary-35 bg-gradient-primary-button text-white shadow-[0_0_24px_rgba(6,160,237,0.55)]"
                        : isPassedOrActive
                        ? "border-primary-10 bg-neutral-65 text-primary-35"
                        : "border-neutral-83 bg-neutral-65 text-neutral-93 hover:border-primary-35/60"
                    }`}
                  >
                    {item.step}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aligned Uniform-Height Step Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-6 lg:grid-cols-4">
          {HIRING_STEPS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`group relative flex h-full cursor-pointer flex-col rounded-2xl border p-6 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-schedule-call-bg border-primary-35 shadow-[0_18px_45px_rgba(6,160,237,0.28)] -translate-y-1.5"
                    : "bg-neutral-15 border-neutral-81 hover:border-primary-35/40 hover:-translate-y-0.5"
                }`}
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute inset-x-6 top-0 h-[2px] rounded-full transition-opacity duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                      : "opacity-0"
                  }`}
                />

                {/* Card Header: Icon + Step/Duration */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isActive
                        ? "border-white/30 bg-neutral-65/70 text-primary-35 shadow-sm"
                        : "border-neutral-81 bg-gradient-service-card-icon-bg text-primary-35"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="lg:hidden font-Manrope text-xs font-bold text-primary-35">
                      Step {item.step}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide transition-colors ${
                        isActive
                          ? "border-white/25 bg-neutral-65/60 text-white"
                          : "border-neutral-83 bg-neutral-15 text-primary-45"
                      }`}
                    >
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Title & Body */}
                <h3 className="mt-5 font-Manrope text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p
                  className={`mt-2.5 text-sm leading-6 transition-colors ${
                    isActive ? "text-neutral-99" : "text-neutral-93"
                  }`}
                >
                  {item.description}
                </p>

                {/* Aligned Footer Metadata */}
                <div className="mt-auto pt-5">
                  <div
                    className={`border-t pt-3.5 flex items-center gap-2 text-xs transition-colors ${
                      isActive
                        ? "border-white/20 text-white"
                        : "border-neutral-81 text-primary-45/90"
                    }`}
                  >
                    <svg
                      className={`h-3.5 w-3.5 shrink-0 ${
                        isActive ? "text-primary-35" : "text-primary-10"
                      }`}
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
                    <span className="font-medium">{item.outcome}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-neutral-81 bg-neutral-15 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-sm text-neutral-99/90">
            <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary-10 shadow-[0_0_10px_#06a0ed]" />
            <span>
              <strong className="font-semibold text-white">
                Average Timeline: 10–14 Days
              </strong>{" "}
              <span className="text-neutral-93">
                — with constructive feedback guaranteed after every stage.
              </span>
            </span>
          </div>

          <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-primary-35">
            100% Human Reviewed
          </span>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;