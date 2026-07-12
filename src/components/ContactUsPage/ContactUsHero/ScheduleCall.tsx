// ScheduleCall.tsx
import { useState } from "react";
import { ICONS } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Modal from "../../Reusable/Modal/Modal";
import TextInput from "../../Reusable/TextInput/TextInput";
import Textarea from "../../Reusable/TextArea/TextArea";
import { useForm } from "react-hook-form";
import Calendar from "./Calendar";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ScheduleCall = () => {
  const [isScheduleCallModalOpen, setIsScheduleCallModalOpen] =
    useState<boolean>(false);

  // Selected date state - kept in ScheduleCall component
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  // Handle date selection
  const handleDateSelect = (day: number) => {
    setSelectedDate(selectedDate === day ? null : day);
  };

  // Handle month change
  const handleMonthChange = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <>
      <div className="p-5 lg:p-10 bg-white border border-white rounded-[20px] lg:rounded-[40px] h-fit w-full lg:w-[40%]">
        <h2 className="text-neutral-65 font-Manrope text-[26px] md:text-[36px] font-semibold">
          Prefer to talk directly?
        </h2>
        <p className="text-neutral-86 font-normal mt-2 md:mt-3">
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
            onClick={() => setIsScheduleCallModalOpen(true)}
          />
        </div>

        <div className="p-4 bg-primary-30 rounded-lg text-primary-10 text-xs font-medium flex items-center gap-2 mt-8">
          <img src={ICONS.clock} alt="" className="size-6" />
          We usually respond within 12 hours.
        </div>
      </div>

      <Modal
        isModalOpen={isScheduleCallModalOpen}
        setIsModalOpen={setIsScheduleCallModalOpen}
      >
        <div className="relative bg-gradient-schedule-call-bg p-6 backdrop-blur-[45px] rounded-2xl font-Manrope flex flex-col lg:flex-row gap-8 h-full max-h-[90vh] overflow-y-auto">
          {/* Calendar Component */}
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            currentDate={currentDate}
            onMonthChange={handleMonthChange}
          />

          {/* Form Section */}
          <div className="w-full lg:w-[60%]">
            <h2 className="text-white text-center font-Manrope text-2xl font-semibold">
              Schedule a Call
            </h2>

            <form className="flex flex-col gap-4 mt-8 w-full">
              <TextInput
                label="Name"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                error={errors.name}
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
                error={errors.email}
              />

              <TextInput
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                error={errors.phoneNumber}
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
                label="Schedule Call"
                className="w-full flex items-center justify-center"
              />
            </form>

            {/* Show selected date in form */}
            {selectedDate && (
              <div className="mt-4 p-3 bg-white/10 rounded-lg text-center">
                <p className="text-white/80 text-sm">
                  Selected Date:{" "}
                  {currentDate.toLocaleString("default", { month: "long" })}{" "}
                  {selectedDate}, {currentDate.getFullYear()}
                </p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScheduleCall;
