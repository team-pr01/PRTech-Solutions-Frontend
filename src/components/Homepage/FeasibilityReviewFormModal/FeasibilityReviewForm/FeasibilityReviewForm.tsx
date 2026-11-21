/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiPhoneCall } from "react-icons/fi";
import Button from "../../../Reusable/Button/Button";
import SelectDropdown from "../../../Reusable/SelectDropdown/SelectDropdown";
import Textarea from "../../../Reusable/TextArea/TextArea";
import TextInput from "../../../Reusable/TextInput/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBookDiscoveryCallMutation } from "../../../../redux/Features/DiscoveryCall/discoveryCallApi";
import { motion, AnimatePresence } from "framer-motion";
import DiscoveryCallSuccessState from "../../../Shared/DiscoveryCallSuccessState/DiscoveryCallSuccessState";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
  service?: string;
  industry?: string;
};

type TFeasibilityReviewFormProps = {
  showServiceContext?: boolean;
  preselectedService?: string;
};

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

const FeasibilityReviewForm: React.FC<TFeasibilityReviewFormProps> = ({
  showServiceContext,
  preselectedService,
}) => {
  const [bookDiscoveryCall, { isLoading }] = useBookDiscoveryCallMutation();

  const [num1] = useState<number>(3);
  const [num2] = useState<number>(6);
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

  const handleBookFeasibilityReviewCall = async (data: TFormData) => {
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
        service: data.service || preselectedService || "",
        industry: data.industry || "",
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
    <div className="w-full xl:w-[55%] flex flex-col bg-white p-5 md:p-8 relative overflow-hidden">
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
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-neutral-30 font-Manrope text-lg font-bold mb-6">
              Share your project details and our team will provide a feasibility
              review, timelines, and next steps.
            </h2>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 animate-in fade-in">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <p className="text-red-600 text-sm font-medium">
                  {errorMessage}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(handleBookFeasibilityReviewCall)}
              className="flex flex-col gap-5"
            >
              <TextInput
                label="Full Name"
                placeholder="Ex: John Doe"
                {...register("name", { required: "Name is required" })}
                error={errors.name}
                variant="light"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  {...register("phoneNumber", {
                    required: "Phone is required",
                  })}
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

              <div className="border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-5 mt-2">
                {/* Verification Box */}
                <div className="flex items-center gap-3 shrink-0">
                  <label className="text-neutral-500 font-Manrope text-base font-semibold whitespace-nowrap">
                    Verify: {num1} + {num2} =
                  </label>
                  <input
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-16 h-10 px-2 text-center text-lg font-bold text-neutral-70 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-10 focus:ring-2 focus:ring-primary-10/20 transition-all duration-200 shadow-sm"
                    placeholder="?"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  isLoading={isLoading}
                  label={"Submit Project Brief"}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 font-Manrope mt-2">
                <span>Prefer to speak directly?</span>
                <a
                  href="tel:+919359963665"
                  className="flex items-center gap-1.5 font-semibold text-primary-10 hover:text-primary-25 transition-colors group"
                >
                  <FiPhoneCall className="text-base group-hover:animate-pulse" />
                  Call Now
                </a>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeasibilityReviewForm;
