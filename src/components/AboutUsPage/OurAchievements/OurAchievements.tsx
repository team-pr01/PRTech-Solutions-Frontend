import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const OurAchievements = () => {
  const ourAchievements = [
    {
      icon: ICONS.project,
      label: "Projects Delivered",
      value: 45,
      valuePrefix: "+",
    },
    {
      icon: ICONS.clients,
      label: "Clients Served",
      value: 100,
      valuePrefix: "+",
    },
    {
      icon: ICONS.experience,
      label: "Years Experience",
      value: 5,
      valuePrefix: "+",
    },
    {
      icon: ICONS.onTimeDelivery,
      label: "On-Time Delivery",
      value: 95,
      valuePrefix: "%",
    },
    {
      icon: ICONS.performanceBoost,
      label: "Performance Boost",
      value: 3,
      valuePrefix: "x",
    },
  ];
  return (
    <div className="py-22">
      <Container>
        <div className="flex items-center justify-center gap-2">
          <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-primary-10"></div>
          </div>
          <p className="text-neutral-70 font-medium uppercase">
            Our achievement
          </p>
        </div>

        <div className="bg-white border border-primary-45 rounded-3xl px-8 py-11 mt-10 flex items-center justify-between text-center">
          {ourAchievements?.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center flex-1 justify-center relative"
            >
              <div className="flex flex-col items-center justify-between gap-10">
                <div className="bg-primary-30 rounded-[10px] p-5 flex items-center justify-center">
                  <img src={achievement?.icon} alt="" className="size-5" />
                </div>
                <div>
                  <h2 className="text-neutral-30 text-[44px] 2xl:text-[56px] font-semibold">
                    {achievement?.value}
                    <span className="text-primary-10">
                      {achievement?.valuePrefix}
                    </span>
                  </h2>
                  <p className="mt-2 text-neutral-50 text-base 2xl:text-xl font-medium">
                    {achievement?.label}
                  </p>
                </div>
              </div>

              {/* Vertical line */}
              {index !== ourAchievements.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-50 bg-primary-45"></div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurAchievements;
