import { ICONS } from "../../../assets";
import Button from "../../Reusable/Button/Button";

const ScheduleCall = () => {
  return (
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
  );
};

export default ScheduleCall;
