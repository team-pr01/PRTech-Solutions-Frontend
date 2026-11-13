import Container from "../../Reusable/Container/Container";

const JobDetailsCta = () => {
  return (
    <section className="bg-neutral-20 pt-14 md:pt-20 text-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-neutral-81 bg-gradient-key-solution-card px-7 py-10 md:px-12 md:py-12 shadow-our-work-client-box">
          {/* Subtle Top Accent Hairline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-why-work-with-us-section-divider"
          />

          {/* Soft Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-10/15 blur-[90px]"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-center lg:text-left">
            {/* Left Copy */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary-35">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-10" />
                <span>Direct Talent Line</span>
              </div>

              <h3 className="mt-3 font-Manrope text-2xl md:text-3xl font-semibold leading-snug text-white">
                Have a Question{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-35">
                  Before You Apply?
                </span>
              </h3>

              <p className="mt-2.5 text-sm md:text-base leading-relaxed text-neutral-93">
                Write directly to our hiring leads about role scope, tech stack,
                or remote setup—no automated bots, just real answers within one
                business day.
              </p>
            </div>

            {/* Right CTA & SLA Note */}
            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <a
                href="mailto:careers@company.com"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-primary-button px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-button transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              >
                <svg
                  className="h-4 w-4 text-white/90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.9}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>careers@company.com</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <span className="text-xs text-neutral-93">
                Typically replies within{" "}
                <strong className="font-medium text-primary-45">24 hours</strong>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JobDetailsCta;