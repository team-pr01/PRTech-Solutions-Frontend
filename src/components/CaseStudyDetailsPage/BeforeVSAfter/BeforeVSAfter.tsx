import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const BeforeVSAfter = () => {
  const beforeVsAfter = [
    {
      title: "Before",
      items: [
        "Fully manual process end-to-end",
        "No tracking or status visibility",
        "~300 registrations per year",
        "Heavy operational overhead",
      ],
    },
    {
      title: "After",
      items: [
        "Structured digital marketplace",
        "End-to-end hiring pipeline with status",
        "300 registrations in 4 months",
        "Automated workflows, minimal ops load",
      ],
    },
  ];

  return (
    <div className="relative h-fit font-Manrope overflow-x-auto bg-neutral-20">
      <img
        src={IMAGES.beforeVsAfterBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading">Before vs. After</p>
            </div>

            <h2 className="heading text-white text-center max-w-262 mx-auto mt-2.5">
              The Transformation at a{" "}
              <span className="font-Playfair-Display italic font-medium">
                Glance
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-14">
            {beforeVsAfter.map((data, index) => (
              <div key={index}>
                {/* Header */}
                <div
                  className={`${data?.title === "Before" ? "bg-neutral-79" : "bg-white"} px-6 py-3 rounded-t-3xl`}
                >
                  <h3
                    className={`${data?.title === "Before" ? "text-white" : "text-neutral-77"} text-[28px] font-semibold`}
                  >
                    {data?.title}
                  </h3>
                </div>

                <div className="bg-neutral-60 backdrop-blur-[49.5px] px-6 pb-8 pt-4 rounded-b-3xl relative">
                  {data?.title === "After" && (
                    <div className="bg-gradient-after-card absolute top-0 bottom-0 right-0 left-0 rounded-b-3xl" />
                  )}
                  {data?.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 relative"
                    >
                      <div className="bg-white rounded-full size-8 flex items-center justify-center">
                        <img
                          src={
                            data?.title === "Before"
                              ? ICONS.cancelCircle
                              : ICONS.thunder
                          }
                          alt=""
                          className="size-5"
                        />
                      </div>
                      <p className="text-white text-lg font-medium border-b border-primary-65 pb-4 flex-1 mt-4">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BeforeVSAfter;
