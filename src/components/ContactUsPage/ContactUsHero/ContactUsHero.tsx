import { useForm } from "react-hook-form";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import TextInput from "../../Reusable/TextInput/TextInput";
import Button from "../../Reusable/Button/Button";
import Textarea from "../../Reusable/TextArea/TextArea";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

interface ContactDetail {
  text: string;
  href?: string;
}

interface ContactItem {
  label: string;
  icon: string;
  details: ContactDetail[];
}

const ContactUsHero = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const contactDetails: ContactItem[] = [
    {
      label: "Phone",
      icon: ICONS.phoneDark,
      details: [
        {
          text: "+91 93599 63665 (IND)",
          href: "tel:+919359963665",
        },
        {
          text: "+880 1572-915890 (BD)",
          href: "tel:+8801572915890",
        },
      ],
    },
    {
      label: "Location",
      icon: ICONS.locationDark,
      details: [
        {
          text: "1234 Mumbai, Maharashtra 400001, India, 1234 Mumbai, Maharashtra 400001, India",
        },
      ],
    },
    {
      label: "Email",
      icon: ICONS.emailDark,
      details: [
        {
          text: "hello@prtech-solutions.com",
          href: "mailto:hello@prtech-solutions.com",
        },
        {
          text: "support@prtech-solutions.com",
          href: "mailto:support@prtech-solutions.com",
        },
      ],
    },
  ];

  return (
    <div className="bg-neutral-20 py-7.5 relative font-Manrope">
      <img
        src={IMAGES.contactUsHeroBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 w-full z-10 mt-40">
        <Container>
          <div className="bg-white w-fit mx-auto px-4 py-3 text-neutral-65 font-semibold flex items-center justify-center gap-2 rounded-3xl">
            <img src={ICONS.polygon} alt="" />
            Get In Touch <img src={ICONS.polygon} alt="" />
          </div>
          <h1 className="text-white text-center font-Manrope text-[60px] font-semibold leading-15 max-w-230 mx-auto mt-4">
            Let's{" "}
            <span className="font-Playfair-Display italic font-medium">
              Build Something
            </span>{" "}
            That Actually Works
          </h1>

          <p className="text-white font-Manrope text-center text-xl leading-8 max-w-205 mx-auto font-normal mt-6">
            Whether you have a clear idea or just know something needs to
            improve ,we'll help you figure out the right system for your
            business.
          </p>

          {/* Contact Details Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-neutral-86 text-sm font-medium tracking-wide">
                  {item.label}
                </p>

                <div className="flex flex-col gap-1 mt-3">
                  {item.details.map((detail, idx) =>
                    detail.href ? (
                      <a
                        key={idx}
                        href={detail.href}
                        className="text-neutral-70 font-medium hover:underline transition-all duration-200 flex items-center gap-3"
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="size-5 mt-0.5 shrink-0"
                        />
                        {detail.text}
                      </a>
                    ) : (
                      <div className="flex gap-3">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="size-5 mt-0.5 shrink-0"
                        />
                        <p key={idx} className="text-neutral-70 font-medium">
                          {detail.text}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-10 mt-25">
            {/* Contact us form */}
            <div className="p-10 bg-gradient-contact-us-form-bg backdrop-blur-xl border border-white rounded-[40px] w-[60%]">
              <h2 className="text-white text-center font-Manrope text-[36px] font-semibold">
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

            <div className="p-10 bg-white border border-white rounded-[40px] h-fit w-[40%]">
              <h2 className="text-neutral-65 font-Manrope text-[36px] font-semibold">
                Prefer to talk directly?
              </h2>
              <p className="text-neutral-86 font-normal mt-3">
                You can also schedule a call at your convenience.
              </p>

              <div className="px-5 py-6 bg-gradient-schedule-call-bg rounded-[20px] flex flex-col items-center gap-3 mt-8">
                <div className="flex gap-2">
                  <img src={ICONS.calendar} alt="" />
                  <p className="text-white">
                    You can also schedule a call at your convenience.
                  </p>
                </div>

                <Button
                  variant="secondary"
                  label="Book a Call"
                  className="w-full flex items-center justify-center"
                />
              </div>

              <div className="p-4 bg-primary-30 rounded-lg text-primary-10 text-xs font-medium flex items-center gap-2 mt-8">
                <img src={ICONS.clock} alt="" className="size-6" />
                We usually respond within 12 hours.
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsHero;
