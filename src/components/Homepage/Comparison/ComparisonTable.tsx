import { ICONS, IMAGES } from "../../../assets";

type TComparisonItem = {
  id: string;
  logo: string;
  title: string;
  description: string;
  features: {
    speed: boolean;
    flexibility: boolean;
    quality: boolean;
    scalability: boolean;
    affordability: boolean;
  };
};

const ComparisonTable = () => {
  const features = [
    "Speed",
    "Flexibility",
    "Quality",
    "Scalability",
    "Affordability",
  ];

  const featureKeys = [
    "speed",
    "flexibility",
    "quality",
    "scalability",
    "affordability",
  ];

  const comparisonData: TComparisonItem[] = [
    {
      id: "01",
      logo: IMAGES.logoBlack,
      title: "PRTech Solutions",
      description:
        "Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees",
      features: {
        speed: true,
        flexibility: true,
        quality: true,
        scalability: true,
        affordability: true,
      },
    },
    {
      id: "02",
      logo: ICONS.inHouseTeam,
      title: "In House Team",
      description:
        "A full-time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly",
      features: {
        speed: false,
        flexibility: false,
        quality: true,
        scalability: false,
        affordability: false,
      },
    },
    {
      id: "03",
      logo: ICONS.agencies,
      title: "Agencies",
      description:
        "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects",
      features: {
        speed: false,
        flexibility: false,
        quality: true,
        scalability: false,
        affordability: false,
      },
    },
    {
      id: "04",
      logo: ICONS.freelancers,
      title: "Freelancers",
      description:
        "Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration",
      features: {
        speed: false,
        flexibility: true,
        quality: false,
        scalability: false,
        affordability: true,
      },
    },
    {
      id: "05",
      logo: ICONS.selfServiceTools,
      title: "Self-Service Tools",
      description:
        "DIY tools like website builders are budget-friendly, but you can't expect strategic thinking & originality",
      features: {
        speed: true,
        flexibility: false,
        quality: false,
        scalability: false,
        affordability: true,
      },
    },
  ];

  return (
    // ✅ ONLY THIS LINE CHANGED - Added overflow-x-auto
    <div className="mt-18 w-full overflow-x-auto">
      {/* Header */}
      <div className="px-7.5 text-white text-base xl:text-xl font-medium flex items-center justify-between">
        <p className="min-w-109 text-left">Platform</p>
        <div className="flex items-center gap-12.5">
          {features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 xl:gap-8 mt-10 min-w-250">
        {comparisonData?.map((item) => (
          <div
            key={item.id}
            className={`${item?.id === "01" ? "bg-gradient-comparison" : "bg-white"} p-4 2xl:p-7.5 rounded-2xl 2xl:rounded-[20px] border xl:border-2 border-white flex items-center justify-between`}
          >
            <div className="flex items-center gap-6 text-left min-w-112">
              <div
                className={`${item?.id === "01" ? "bg-white" : "bg-primary-30"} size-20 rounded-[10px] flex items-center justify-center p-2`}
              >
                <img src={item?.logo} alt="" />
              </div>
              <div>
                <h2
                  className={`${item?.id === "01" ? "text-white" : "neutral-65"} text-xl 2xl:text-2xl font-semibold`}
                >
                  {item?.title}
                </h2>
                <p
                  className={`${item?.id === "01" ? "text-neutral-40/80" : "text-neutral-80"} text-xs xl:text-sm 2xl:text-base max-w-70 2xl:max-w-91 mt-2`}
                >
                  {item?.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-12.5 w-full max-w-155">
              {featureKeys?.map((key) => (
                <td key={key} className="text-center">
                  {item.features[key as keyof typeof item.features] ? (
                    item?.id === "01" ? (
                      <img src={ICONS.tickMarkWhite} alt="" />
                    ) : (
                      <img src={ICONS.tickMarkGreen} alt="" />
                    )
                  ) : (
                    <img src={ICONS.crossRed} alt="" />
                  )}
                </td>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
