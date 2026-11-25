import React from "react";
import Container from "../../../Reusable/Container/Container";

const JobDescriptionSkeleton: React.FC = () => {
  return (
    <main className="sectionPadding font-Manrope">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start animate-pulse">
          {/* LEFT COLUMN: ROLE DETAILS */}
          <div className="lg:col-span-7 space-y-12">
            {/* What Are We Looking For */}
            <section>
              <div className="h-6 w-64 rounded-md bg-neutral-10" />

              {/* Requirements */}
              <div className="mt-4 space-y-4">
                <div className="h-4 w-full rounded bg-neutral-10" />
                <div className="h-4 w-11/12 rounded bg-neutral-10" />
                <div className="h-4 w-10/12 rounded bg-neutral-10" />
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="h-8 w-24 rounded-lg bg-neutral-10" />
                <div className="h-8 w-20 rounded-lg bg-neutral-10" />
                <div className="h-8 w-28 rounded-lg bg-neutral-10" />
                <div className="h-8 w-20 rounded-lg bg-neutral-10" />
                <div className="h-8 w-24 rounded-lg bg-neutral-10" />
              </div>
            </section>

            <div className="h-px bg-neutral-10" />

            {/* Responsibilities */}
            <section>
              <div className="h-6 w-44 rounded-md bg-neutral-10" />

              <ul className="mt-4 space-y-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary-40" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-neutral-10" />
                      {index % 2 === 0 && (
                        <div className="h-4 w-4/5 rounded bg-neutral-10" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Qualifications */}
            <section>
              <div className="h-6 w-36 rounded-md bg-neutral-10" />

              <ul className="mt-4 space-y-5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-10/30" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-neutral-10" />
                      {index % 2 === 0 && (
                        <div className="h-4 w-3/4 rounded bg-neutral-10" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nice to Have */}
            <section className="rounded-2xl border border-neutral-10 bg-neutral-78 p-6 md:p-7">
              <div className="h-6 w-48 rounded-md bg-neutral-10" />

              <ul className="mt-5 space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-25/40" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-neutral-10" />
                      {index % 2 === 0 && (
                        <div className="h-4 w-4/5 rounded bg-neutral-10" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Growth Roadmap */}
            <section>
              {/* Section Label */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-primary-10/30" />
                <div className="h-3 w-32 rounded bg-neutral-10" />
              </div>

              {/* Heading */}
              <div className="mt-3 h-9 w-64 rounded-md bg-neutral-10" />

              {/* Roadmap Cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-neutral-10 bg-gradient-challenge-card p-5"
                  >
                    <div className="h-6 w-28 rounded-full bg-primary-40" />

                    <div className="mt-4 h-5 w-32 rounded bg-neutral-10" />

                    <div className="mt-3 space-y-2">
                      <div className="h-3.5 w-full rounded bg-neutral-10" />
                      <div className="h-3.5 w-full rounded bg-neutral-10" />
                      <div className="h-3.5 w-4/5 rounded bg-neutral-10" />
                      <div className="h-3.5 w-3/5 rounded bg-neutral-10" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits & Perks */}
            <section>
              <div className="h-6 w-40 rounded-md bg-neutral-10" />

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="h-5 w-5 shrink-0 rounded-full bg-primary-40" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full rounded bg-neutral-10" />
                      {index % 2 === 0 && (
                        <div className="h-4 w-3/4 rounded bg-neutral-10" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: APPLICATION FORM */}
          <aside className="lg:col-span-5 lg:sticky lg:top-10">
            <div className="rounded-2xl border border-neutral-10 bg-white p-5 shadow-industry-tab md:p-7">
              {/* Form Heading */}
              <div className="h-7 w-52 rounded-md bg-neutral-10" />
              <div className="mt-3 h-4 w-64 max-w-full rounded bg-neutral-10" />

              {/* Form Fields */}
              <div className="mt-7 space-y-5">
                {/* Name */}
                <div>
                  <div className="mb-2 h-4 w-24 rounded bg-neutral-10" />
                  <div className="h-12 w-full rounded-lg border border-neutral-10 bg-neutral-78" />
                </div>

                {/* Email */}
                <div>
                  <div className="mb-2 h-4 w-28 rounded bg-neutral-10" />
                  <div className="h-12 w-full rounded-lg border border-neutral-10 bg-neutral-78" />
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-2 h-4 w-28 rounded bg-neutral-10" />
                  <div className="h-12 w-full rounded-lg border border-neutral-10 bg-neutral-78" />
                </div>

                {/* Resume Upload */}
                <div>
                  <div className="mb-2 h-4 w-32 rounded bg-neutral-10" />
                  <div className="flex h-28 w-full items-center justify-center rounded-xl border-2 border-dashed border-neutral-10 bg-neutral-78">
                    <div className="space-y-2">
                      <div className="mx-auto h-7 w-7 rounded-lg bg-neutral-10" />
                      <div className="h-3 w-36 rounded bg-neutral-10" />
                    </div>
                  </div>
                </div>

                {/* Additional Fields */}
                <div>
                  <div className="mb-2 h-4 w-36 rounded bg-neutral-10" />
                  <div className="h-28 w-full rounded-lg border border-neutral-10 bg-neutral-78" />
                </div>

                {/* Submit Button */}
                <div className="h-12 w-full rounded-full bg-primary-40" />

                {/* Footer Note */}
                <div className="mx-auto h-3 w-48 rounded bg-neutral-10" />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default JobDescriptionSkeleton;
