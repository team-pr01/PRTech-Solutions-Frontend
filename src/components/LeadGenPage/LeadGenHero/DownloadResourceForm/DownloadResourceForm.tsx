import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import TextInput from "../../../Reusable/TextInput/TextInput";
import Button from "../../../Reusable/Button/Button";
import { ICONS } from "../../../../assets";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  agreeToTerms: boolean;
};

const DownloadResourceForm = () => {
  const {
    register,
    // formState: { errors },
  } = useForm<TFormData>();

  const [isAgreed, setIsAgreed] = useState(false);

  const toggleAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="p-5 lg:p-10 bg-gradient-contact-us-form-bg backdrop-blur-xl border border-white rounded-[20px] lg:rounded-[40px]">
      <h2 className="text-white text-center font-Manrope text-[26px] md:text-[36px] font-semibold">
        Download the Free{" "}
        <span className="font-Playfair-Display italic font-medium text-primary-10">
          Resource
        </span>
      </h2>

      <form className="flex flex-col gap-5 mt-8">
        <TextInput
          label="Name"
          placeholder="Enter your name"
          {...register("name", {
            required: "Name is required",
          })}
        />

        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          type="tel"
          {...register("phoneNumber", {
            required: "Phone number is required",
          })}
        />

        <TextInput
          label="Company Name (Optional)"
          placeholder="Enter your company name"
          {...register("companyName")}
          isRequired={false}
        />

        {/* Custom Checkbox */}
        <div
          className="flex items-center gap-3 mt-2 cursor-pointer w-fit"
          onClick={toggleAgreement}
        >
          <div className="relative flex items-center">
            {/* Hidden actual input for react-hook-form validation */}
            <input
              type="checkbox"
              className="peer sr-only"
              checked={isAgreed}
              readOnly
              {...register("agreeToTerms", {
                required: "You must agree to the terms",
              })}
            />

            {/* Custom visual checkbox */}
            <div
              className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all duration-200 border ${
                isAgreed
                  ? "bg-[#06A0ED] border-[#06A0ED]"
                  : "border-white/30 bg-white/5 hover:border-white/50"
              }`}
            >
              <FiCheck
                className={`text-white transition-opacity duration-200 ${
                  isAgreed ? "opacity-100" : "opacity-0"
                }`}
                size={14}
                strokeWidth={3}
              />
            </div>
          </div>

          <span className="font-medium font-Manrope text-white select-none">
            I agree to the{" "}
            <Link
              to="/terms-and-conditions"
              onClick={(e) => e.stopPropagation()}
              className="text-white hover:text-primary-10 hover:underline transition-colors underline"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              onClick={(e) => e.stopPropagation()}
              className="text-white hover:text-primary-10 hover:underline transition-colors underline"
            >
              Privacy Policy
            </Link>
          </span>
        </div>

        <Button
          type="submit"
          label="Download Free Resource"
          variant="secondary"
          className="w-full flex items-center justify-center mt-2"
          icon={ICONS.download}
          //   isLoading={isLoading}
        />
      </form>

      <div className="bg-primary-55 p-4 flex items-center gap-4 rounded-2xl mt-8">
        <img src={ICONS.lock} alt="" />
        <span className="text-white font-Manrope font-semibold text-sm">
          We respect your privacy. No spam, ever.
        </span>
      </div>

      {/* Add this to your global CSS or tailwind config */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DownloadResourceForm;
