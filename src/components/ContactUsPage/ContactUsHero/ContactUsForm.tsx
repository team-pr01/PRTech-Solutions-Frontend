/* eslint-disable react-hooks/set-state-in-effect */
import { useForm } from "react-hook-form";
import Textarea from "../../Reusable/TextArea/TextArea";
import Button from "../../Reusable/Button/Button";
import TextInput from "../../Reusable/TextInput/TextInput";
import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { ICONS } from "../../../assets";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactUsForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);

  // Auto-hide success bar after 5 seconds
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    if (sent) {
      setCountdown(5);

      countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timer = setTimeout(() => {
        setSent(false);
        setCountdown(5);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [sent]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_35a8sxq",
        "template_0743afm",
        formRef.current,
        "i-4z2W4xgSOfPtEtl",
      );

      setSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register,
    formState: { errors },
  } = useForm<TFormData>();

  // Handle manual close
  const handleClose = () => {
    setSent(false);
    setCountdown(5);
  };

  return (
    <div className="p-5 lg:p-10 bg-gradient-contact-us-form-bg backdrop-blur-xl border border-white rounded-[20px] lg:rounded-[40px] w-full lg:w-[60%]">
      <h2 className="text-white text-center font-Manrope text-[26px] md:text-[36px] font-semibold">
        Tell Us About Your{" "}
        <span className="font-Playfair-Display italic font-medium text-primary-10">
          Requirement
        </span>
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 mt-8"
      >
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

        <Textarea
          label="What are you looking to build?"
          placeholder="Describe your vision, goals, or technical challenges..."
          error={errors.message}
          {...register("message")}
          isRequired={false}
        />

        <Button
          type="submit"
          label="Submit"
          variant="secondary"
          className="w-full flex items-center justify-center"
          isLoading={isLoading}
        />

        {/* Success Bar with Countdown */}
        {sent && (
          <div className="p-4 bg-primary-10/40 rounded-lg text-white text-xs font-medium flex items-center justify-between mt-3 animate-slideDown">
            <div className="flex items-center gap-2">
              <img src={ICONS.tick} alt="" className="size-6" />
              Thanks for your interest. We will contact you shortly!
            </div>

            <div className="flex items-center gap-3">
              <div className="size-6 rounded-full border border-white text-white flex items-center justify-center text-xs font-semibold">
                {countdown}
              </div>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </form>

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

export default ContactUsForm;
