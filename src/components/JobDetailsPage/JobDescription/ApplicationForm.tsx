import Button from "../../Reusable/Button/Button";

const ApplicationForm = () => {
    const isSubmitted = false;
    const isDragging = false;
    return (
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
                          Test
                        </strong>
                        . We&apos;ve sent a confirmation to{" "}
                        <span className="font-medium text-neutral-65">
                          test@gmail.com
                        </span>{" "}
                        and will follow up within 48 hours.
                      </p>
                      <button
                        type="button"
                        className="mt-6 rounded-full border border-neutral-10 px-5 py-2.5 text-xs font-semibold text-neutral-65 hover:border-primary-10"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form
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
                          placeholder="Jordan Taylor"
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
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
                            placeholder="jordan@email.com"
                            className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                          />
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
                          placeholder="https://github.com/username"
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
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
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <div
                          role="button"
                          tabIndex={0}
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
                           Drop your resume here or click to browse
                          </p>
                          <p className="mt-0.5 text-[11px] text-neutral-80">
                            PDF, DOC, DOCX up to 10MB
                          </p>
                        </div>
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
                          placeholder="Share a link or quick note on a system you're proud of building..."
                          className="mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30"
                        />
                      </div>

                      <Button label="Submit Application" className="w-full"/>
                    </form>
                  )}
                </div>
              </div>
    );
};

export default ApplicationForm;