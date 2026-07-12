/* eslint-disable @typescript-eslint/no-explicit-any */
// ScheduleCall.tsx
import { useState } from "react";
import { ICONS } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Modal from "../../Reusable/Modal/Modal";
import TextInput from "../../Reusable/TextInput/TextInput";
import Textarea from "../../Reusable/TextArea/TextArea";
import { useForm } from "react-hook-form";
import Calendar from "./Calendar";
import { useScheduleCallMutation } from "../../../redux/Features/ScheduleCall/scheduleCallApi";
import { FiCheckCircle, FiXCircle, FiArrowLeft } from "react-icons/fi";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ScheduleCall = () => {
  const [scheduleCall] = useScheduleCallMutation();
  const [isScheduleCallModalOpen, setIsScheduleCallModalOpen] =
    useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
  ];

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    setSelectedTime("");
  };

  const handleMonthChange = (date: Date) => {
    setCurrentDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const onSubmit = async (data: TFormData) => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage("Please select both a date and a time");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
        scheduledDate: `${currentDate.toLocaleString("default", { month: "long" })} ${selectedDate}, ${currentDate.getFullYear()}`,
        scheduledTime: selectedTime,
      };

      const response = await scheduleCall(payload).unwrap();
      if (response.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          handleModalClose();
        }, 3000);
      }
    } catch (error: any) {
      setErrorMessage(
        error?.data?.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setIsScheduleCallModalOpen(false);
    setIsSuccess(false);
    setErrorMessage("");
    setSelectedDate(null);
    setSelectedTime("");
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
            <p className="text-white">Schedule a call at your convenience.</p>
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
        setIsModalOpen={handleModalClose}
        width = "w-[90%] sm:w-[60%] lg:w-[90%] 2xl:w-[50%]"
      >
        <div className="relative bg-gradient-schedule-call-bg p-6 lg:p-10 backdrop-blur-[45px] rounded-2xl font-Manrope flex flex-col xl:flex-row gap-10 h-full max-h-[95vh] overflow-y-auto">
          {/* LEFT SECTION: CALENDAR OR TIME SLOTS */}
          <div className="w-full xl:w-[45%] flex flex-col">
            {!selectedDate ? (
              <div className="animate-in fade-in zoom-in duration-300 w-full">
                <Calendar
                  selectedDate={selectedDate}
                  onDateSelect={handleDateSelect}
                  currentDate={currentDate}
                  onMonthChange={handleMonthChange}
                />
              </div>
            ) : (
              <div className="animate-in slide-in-from-left-5 fade-in duration-300">
                <button
                  onClick={() => setSelectedDate(null)}
                  className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors group"
                >
                  <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  Back to Calendar
                </button>

                <h3 className="text-white text-xl font-semibold mb-2">
                  Select Availability
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Showing slots for{" "}
                  <span className="text-primary-10 font-bold">
                    {currentDate.toLocaleString("default", { month: "short" })}{" "}
                    {selectedDate}
                  </span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto pr-2 custom-scrollbar max-h-100">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      disabled={isSuccess}
                      className={`
                        py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300
                        ${
                          selectedTime === time
                            ? "bg-white text-primary-10 border-white shadow-xl scale-105"
                            : "bg-white/10 text-white/80 border-white/10 hover:bg-white/20 hover:border-white/30"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SECTION: FORM */}
          <div className="w-full xl:w-[55%] flex flex-col">
            <h2 className="text-white font-Manrope text-2xl font-bold mb-2">
              Tell us about yourself
            </h2>
            <p className="text-white/60 text-sm mb-6">
              Please provide your details to finalize the booking.
            </p>

            {/* Status Messages */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 animate-in fade-in zoom-in">
                <FiCheckCircle className="text-green-400 text-2xl shrink-0" />
                <p className="text-white text-sm">
                  Successfully scheduled for{" "}
                  <span className="font-bold">{selectedTime}</span>!
                </p>
              </div>
            )}

            {errorMessage && !isSuccess && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-2 animate-in shake duration-300">
                <FiXCircle className="text-red-400 text-xl shrink-0" />
                <p className="text-red-200 text-sm">{errorMessage}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <TextInput
                label="Full Name"
                placeholder="Ex: John Doe"
                {...register("name", { required: "Name is required" })}
                error={errors.name}
                isDisabled={isSuccess}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  error={errors.email}
                  isDisabled={isSuccess}
                />
                <TextInput
                  label="Phone Number"
                  placeholder="+1 (555) 000-0000"
                  {...register("phoneNumber", { required: "Required" })}
                  error={errors.phoneNumber}
                  isDisabled={isSuccess}
                />
              </div>

              <Textarea
                label="Message (Optional)"
                placeholder="Tell us a bit about your project or inquiry..."
                error={errors.message}
                {...register("message")}
                isDisabled={isSuccess}
              />

              <div className="pt-6 border-t border-white/10">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  label={
                    isSuccess ? "Appointment Confirmed" : "Confirm Schedule"
                  }
                  className="w-full"
                  variant={isSuccess ? "secondary" : "primary"}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScheduleCall;
