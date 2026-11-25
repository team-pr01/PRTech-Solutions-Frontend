/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useApplyMutation } from "../../../redux/Features/Application/applicationApi";

interface ApplicationFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  linkedInUrl: string;
  experience: string;
  availability: string;
  resumeUrl: string;
}

interface ApplicationFormProps {
  jobId: string;
}

const ApplicationForm = ({ jobId }: ApplicationFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apply, { isLoading }] = useApplyMutation();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      linkedInUrl: "",
      experience: "1-3 years",
      availability: "Immediate",
      resumeUrl: "",
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    try {
      setApiError("");

      // Extract referrer from URL
      const params = new URLSearchParams(window.location.search);
      const referrer = params.get("referrer");

      const payload = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        linkedInUrl: data.linkedInUrl,
        experience: data.experience,
        resumeUrl: data.resumeUrl,
        source: "website",
        availability: data.availability,
        ...(referrer && { referredBy: referrer }),
      };

      await apply({jobId:jobId, data:payload}).unwrap();

      setIsSubmitted(true);
      reset();
    } catch (error: any) {
      setApiError(
        error?.data?.message ||
          error?.data?.error ||
          "Unable to submit your application. Please try again."
      );
    }
  };

  const handleAnotherApplication = () => {
    setIsSubmitted(false);
    setApiError("");
    reset();
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-neutral-10 bg-neutral-72 px-4 py-2.5 text-sm text-neutral-65 placeholder:text-neutral-80 focus:border-primary-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-30";

  const labelClass =
    "block text-xs font-semibold uppercase tracking-wider text-neutral-70";

  return (
    <div className="overflow-hidden rounded-3xl border border-primary-35/60 bg-white shadow-accordion-card">
      {/* Form Header */}
      <div className="border-b border-neutral-10 bg-neutral-78 px-6 py-5">
        <h2 className="font-Manrope text-xl font-bold text-neutral-65">
          Apply for this Position
        </h2>
        <p className="mt-1 text-xs text-neutral-73">
          Takes ~2 minutes · Reviewed personally by engineering & hiring leads.
        </p>
      </div>

      <div className="p-6">
        {isSubmitted ? (
          /* Success State */
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
              Thank you for applying. We've successfully received your
              application and our hiring team will review it. We'll follow up
              with you within 48 hours.
            </p>

            <button
              type="button"
              onClick={handleAnotherApplication}
              className="mt-6 rounded-full border border-neutral-10 px-5 py-2.5 text-xs font-semibold text-neutral-65 transition-colors hover:border-primary-10"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          /* Application Form */
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="jd-fullName" className={labelClass}>
                Full Name *
              </label>

              <input
                id="jd-fullName"
                type="text"
                placeholder="Jordan Taylor"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={inputClass}
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="jd-email" className={labelClass}>
                  Email *
                </label>

                <input
                  id="jd-email"
                  type="email"
                  placeholder="jordan@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className={inputClass}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="jd-phone" className={labelClass}>
                  Phone *
                </label>

                <input
                  id="jd-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    minLength: {
                      value: 7,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={inputClass}
                />

                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="jd-linkedin" className={labelClass}>
                LinkedIn URL
              </label>

              <input
                id="jd-linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username"
                {...register("linkedInUrl", {
                  validate: (value) =>
                    !value ||
                    /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(value) ||
                    "Please enter a valid LinkedIn URL",
                })}
                className={inputClass}
              />

              {errors.linkedInUrl && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.linkedInUrl.message}
                </p>
              )}
            </div>

            {/* Experience & Availability */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="jd-exp" className={labelClass}>
                  Experience *
                </label>

                <select
                  id="jd-exp"
                  {...register("experience", {
                    required: "Please select your experience",
                  })}
                  className={inputClass}
                >
                  <option value="Fresher">Fresher</option>
                  <option value="1-3 years">1–3 years</option>
                  <option value="4-6 years">4–6 years</option>
                  <option value="7+ years">7+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="jd-notice" className={labelClass}>
                  Availability *
                </label>

                <select
                  id="jd-notice"
                  {...register("availability", {
                    required: "Please select your availability",
                  })}
                  className={inputClass}
                >
                  <option value="Immediate">Immediate</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="30 days">30 days</option>
                  <option value="60+ days">60+ days</option>
                </select>
              </div>
            </div>

            {/* Resume URL */}
            <div>
              <label htmlFor="jd-resume" className={labelClass}>
                Resume / CV URL *
              </label>

              <input
                id="jd-resume"
                type="url"
                placeholder="https://drive.google.com/file/d/..."
                {...register("resumeUrl", {
                  required: "Resume URL is required",
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Please enter a valid URL starting with http or https",
                  },
                })}
                className={inputClass}
              />

              {errors.resumeUrl && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.resumeUrl.message}
                </p>
              )}

              <p className="mt-1 text-[11px] text-neutral-80">
                Make sure your resume link is publicly accessible.
              </p>
            </div>

            {/* API Error */}
            {apiError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {apiError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary-button px-6 py-3 text-sm font-semibold text-white shadow-chip transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>

            <p className="text-center text-[11px] leading-5 text-neutral-80">
              By submitting, you agree to be contacted regarding your
              application.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
