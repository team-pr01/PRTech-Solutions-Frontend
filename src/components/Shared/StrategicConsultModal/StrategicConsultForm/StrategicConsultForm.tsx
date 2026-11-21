/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../Reusable/Button/Button";
import SelectDropdown from "../../../Reusable/SelectDropdown/SelectDropdown";
import Textarea from "../../../Reusable/TextArea/TextArea";
import TextInput from "../../../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useBookDiscoveryCallMutation } from "../../../../redux/Features/DiscoveryCall/discoveryCallApi";
import DiscoveryCallSuccessState from "../../DiscoveryCallSuccessState/DiscoveryCallSuccessState";

const serviceOptions = [
  { label: "Product Development", value: "product-development" },
  { label: "UI/UX & Design", value: "ui-ux-design" },
  { label: "Graphics & Brand Design", value: "graphics-brand-design" },
  { label: "AI Development & Integration", value: "ai-development" },
  { label: "Deployment & DevOps", value: "deployment-devops" },
  { label: "Maintenance & Support", value: "maintenance-support" },
  { label: "Business Automation Solutions", value: "business-automation" },
];

const industryOptions = [
  { label: "Tuition & Education", value: "education" },
  { label: "NGO & Non-Profit", value: "ngo" },
  { label: "SaaS & Startups", value: "saas" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Real Estate", value: "real-estate" },
  { label: "Fintech", value: "fintech" },
];

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
  service?: string;
  industry?: string;
};

type TStrategicConsultFormProps = {
  showServiceContext?: boolean;
  preselectedService?: string;
};

const StrategicConsultForm: React.FC<TStrategicConsultFormProps> = ({
  showServiceContext,
  preselectedService,
}) => {
  const [bookDiscoveryCall, { isLoading }] = useBookDiscoveryCallMutation();

  const [num1] = useState<number>(4);
  const [num2] = useState<number>(3);
  const [answer, setAnswer] = useState<string>("");

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: {
      service: preselectedService || "",
    },
  });

  const onSubmit = async (data: TFormData) => {
    setErrorMessage("");

    // Math Captcha Validation
    if (parseInt(answer) !== num1 + num2) {
      setErrorMessage("Incorrect verification answer. Please try again.");
      return;
    }

    try {
      const payload = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message || "",
        interestedService: data.service || preselectedService || "",
        industry: data.industry || "",
        sourcePage: window.location.pathname,
      };

      const response = await bookDiscoveryCall(payload).unwrap();

      if (response.success) {
        setIsSuccess(true);
        reset();
        setAnswer("");
      }
    } catch (error: any) {
      setErrorMessage(
        error?.data?.message || "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="flex w-full md:w-1/2 xl:w-[56%] flex-col justify-between bg-white p-4 md:p-8">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          /* Success State */
          <DiscoveryCallSuccessState onClick={() => setIsSuccess(false)} />
        ) : (
          /* Form State */
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              {/* Form Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary-10" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-10">
                    Project Brief
                  </span>
                </div>
                <h2 className="mt-2 text-sm md:text-xl font-semibold md:font-bold leading-snug text-neutral-65">
                  Share your project details and our team will provide a
                  feasibility review, timelines, and next steps.
                </h2>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-red-600 text-sm font-medium">
                    {errorMessage}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4.5"
              >
                <TextInput
                  label="Full Name"
                  placeholder="Ex: John Doe"
                  {...register("name", { required: "Name is required" })}
                  error={errors.name}
                  variant="light"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <TextInput
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    error={errors.email}
                    variant="light"
                  />
                  <TextInput
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                    {...register("phoneNumber", { required: "Required" })}
                    error={errors.phoneNumber}
                    variant="light"
                  />

                  {showServiceContext && (
                    <SelectDropdown
                      label="Service of Interest"
                      placeholder="Select a service"
                      options={serviceOptions}
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      error={errors.service}
                      variant="light"
                    />
                  )}

                  {showServiceContext && (
                    <SelectDropdown
                      label="Industry Vertical"
                      placeholder="Select your industry"
                      options={industryOptions}
                      {...register("industry", {
                        required: "Please select an industry",
                      })}
                      error={errors.industry}
                      variant="light"
                    />
                  )}
                </div>

                <Textarea
                  label="Project Details (Optional)"
                  placeholder="Tell us a bit about your project ..."
                  error={errors.message}
                  {...register("message")}
                  isRequired={false}
                  variant="light"
                />

                {/* Trust & NDA Checkboxes */}
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Fast response times. Fully NDA-protected.
                </div>

                {/* Verification + Submit Row */}
                <div className="mt-2 flex items-stretch sm:items-center gap-4 border-t border-neutral-10 pt-5">
                  {/* Verification Box */}
                  <div className="flex items-center gap-3 shrink-0">
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
                    isLoading={isLoading}
                    label={"Submit"}
                    className="w-full"
                  />
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default StrategicConsultForm;
