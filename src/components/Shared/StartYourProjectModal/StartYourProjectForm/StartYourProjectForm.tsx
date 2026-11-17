import { useState } from "react";
import Button from "../../../Reusable/Button/Button";
import SelectDropdown from "../../../Reusable/SelectDropdown/SelectDropdown";
import Textarea from "../../../Reusable/TextArea/TextArea";
import TextInput from "../../../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";

const serviceOptions = [
  { label: "Product Development", value: "product-development" },
  { label: "UI/UX & Design", value: "ui-ux-design" },
  { label: "Graphics & Brand Design", value: "graphics-brand-design" },
  { label: "AI Development & Integration", value: "ai-development" },
  { label: "Deployment & DevOps", value: "deployment-devops" },
  { label: "Maintenance & Support", value: "maintenance-support" },
  { label: "Business Automation Solutions", value: "business-automation" },
];

const budgetOptions = [
  { label: "Under $5,000", value: "under-5k" },
  { label: "$5,000 - $15,000", value: "5k-15k" },
  { label: "$15,000 - $30,000", value: "15k-30k" },
  { label: "$30,000 - $50,000", value: "30k-50k" },
  { label: "$50,000+", value: "50k-plus" },
];

const timelineOptions = [
  { label: "ASAP", value: "asap" },
  { label: "1 - 3 Months", value: "1-3-months" },
  { label: "3 - 6 Months", value: "3-6-months" },
  { label: "Just Exploring", value: "exploring" },
];

type TFormData = {
  name: string;
  email: string;
  companyName?: string;
  phoneNumber?: string;
  service?: string;
  budget: string;
  timeline: string;
  message?: string;
  requestNda: boolean;
};

type TStartYourProjectFormProps = {
  preselectedService?: string;
};

const StartYourProjectForm: React.FC<TStartYourProjectFormProps> = ({
  preselectedService,
}) => {
  // Changed Math numbers
  const [num1] = useState<number>(7);
  const [num2] = useState<number>(5);
  const [answer, setAnswer] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: {
      service: preselectedService || "",
    },
  });

  return (
    <div className="flex w-full xl:w-[56%] flex-col justify-between bg-white p-6 lg:p-8">
      <div>
        {/* Form Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary-10" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-10">
              Project Brief
            </span>
          </div>
          <h2 className="mt-2 font-Manrope text-lg sm:text-xl font-bold leading-snug text-neutral-65">
            Share your project details and our team will provide a feasibility
            review, timelines, and next steps.
          </h2>
        </div>

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextInput
              label="Full Name"
              placeholder="Ex: John Doe"
              {...register("name", { required: "Name is required" })}
              error={errors.name}
              variant="light"
            />
            <TextInput
              label="Work Email"
              placeholder="john@company.com"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={errors.email}
              variant="light"
            />
          </div>

          {/* Row 2: Company & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TextInput
              label="Company Name (Optional)"
              placeholder="Your company"
              {...register("companyName")}
              isRequired={false}
              variant="light"
            />
            <TextInput
              label="Phone Number (Optional)"
              placeholder="+1 (555) 000-0000"
              {...register("phoneNumber")}
              isRequired={false}
              variant="light"
            />
          </div>

          {/* Row 4: Budget & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SelectDropdown
              label="Estimated Budget"
              placeholder="Select budget range"
              options={budgetOptions}
              {...register("budget", {
                required: "Please select a budget range",
              })}
              error={errors.budget}
              variant="light"
            />

            <SelectDropdown
              label="Target Timeline"
              placeholder="Select timeline"
              options={timelineOptions}
              {...register("timeline", {
                required: "Please select a timeline",
              })}
              error={errors.timeline}
              variant="light"
            />
          </div>

          {/* Project Description */}
          <Textarea
            label="Project Description (Optional)"
            placeholder="Briefly describe what you are trying to build..."
            error={errors.message}
            {...register("message")}
            isRequired={false}
            variant="light"
          />

          {/* Trust & NDA Checkboxes */}
          <div className="flex flex-col gap-3 mt-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Fast response times. Fully NDA-protected.
            </div>

            <label className="flex items-center gap-3 cursor-pointer w-fit">
              <input
                type="checkbox"
                className="peer sr-only"
                {...register("requestNda")}
              />
              <div className="w-4 h-4 shrink-0 rounded-sm border border-neutral-91 bg-white flex items-center justify-center peer-checked:bg-primary-10 peer-checked:border-primary-10 transition-colors duration-200">
                <svg
                  className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-neutral-65 select-none">
                Request an NDA before sharing details
              </span>
            </label>
          </div>

          {/* Verification + Submit Row */}
          <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-neutral-10 pt-5">
            {/* Verification Box */}
            <div className="flex items-center justify-between sm:justify-start gap-3 shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-80">
                Verify
              </span>
              <label className="font-Manrope text-base font-semibold text-neutral-65 whitespace-nowrap">
                {num1} + {num2} =
              </label>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="h-9 w-14 rounded-lg border border-neutral-91 bg-white px-2 text-center text-base font-semibold text-neutral-65 shadow-sm transition-all duration-200 focus:border-primary-10 focus:outline-none focus:ring-2 focus:ring-primary-10/20"
                placeholder="?"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              // isLoading={isSubmitting}
              label={"Submit Project Brief"}
              className="w-full"
            />
          </div>
        </form>
      </div>

      {/* Bottom Direct Call Banner */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-Manrope text-neutral-73">
        <span>Prefer to speak directly with an architect?</span>
        <a
          href="tel:+919359963665"
          className="group inline-flex items-center gap-1.5 font-semibold text-primary-10 transition-colors hover:text-primary-25"
        >
          <FiPhoneCall className="text-sm transition-transform group-hover:scale-110" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default StartYourProjectForm;
