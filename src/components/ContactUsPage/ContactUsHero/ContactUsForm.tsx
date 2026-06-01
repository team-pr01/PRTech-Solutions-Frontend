import { useForm } from "react-hook-form";
import Textarea from "../../Reusable/TextArea/TextArea";
import Button from "../../Reusable/Button/Button";
import TextInput from "../../Reusable/TextInput/TextInput";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  return (
    <div className="p-5 lg:p-10 bg-gradient-contact-us-form-bg backdrop-blur-xl border border-white rounded-[20px] lg:rounded-[40px] w-full lg:w-[60%]">
      <h2 className="text-white text-center font-Manrope text-[26px] md:text-[36px] font-semibold">
        Tell Us About Your{" "}
        <span className="font-Playfair-Display italic font-medium text-primary-10">
          Requirement
        </span>
      </h2>

      <form className="flex flex-col gap-4 mt-8">
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

        {/* Message */}
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
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
