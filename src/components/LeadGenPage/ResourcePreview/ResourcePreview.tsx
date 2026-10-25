import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ICONS, IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const ResourcePreview = () => {
  const whatYouWillLearn = [
    {
      id: 1,
      text: "How to structure your system for scalability",
    },
    {
      id: 2,
      text: "How to reduce manual work using automation",
    },
    {
      id: 3,
      text: "Key mistakes businesses make while building products",
    },
    {
      id: 4,
      text: "A clear approach to building systems that actually perform",
    },
    {
      id: 5,
      text: "What to do if you're not sure where to start",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex < whatYouWillLearn.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [whatYouWillLearn.length]);

  return (
    <div className="bg-gradient-latest-project-bg sectionPadding font-Manrope">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side Content */}
          <div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading uppercase tracking-wider">
                Resource Preview
              </p>
            </div>

            <h2 className="text-neutral-70 heading mt-4">
              What You’ll{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Learn
              </span>
            </h2>

            <p className="description text-neutral-80 mt-4">
              A practical, no-fluff breakdown of the frameworks and systems that
              actually move the needle.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-col gap-3">
              {whatYouWillLearn.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative p-4 rounded-xl flex items-center gap-4 cursor-pointer border transition-colors duration-300 ${
                      isActive
                        ? "bg-primary-30 border-primary-10/30"
                        : "bg-neutral-96 border-neutral-91 hover:bg-white"
                    }`}
                    animate={{
                      scale: isActive ? 1 : 0.98,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img src={ICONS.arrowRightUpBlue} alt="" />
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        isActive ? "text-neutral-20" : "text-neutral-70"
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side Image & Button */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full">
            <div className="relative w-full max-w-100 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border border-primary-10">
              <img
                src={IMAGES.dummyPlaybook}
                alt="Playbook Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="w-full max-w-100">
              <Button
                label="Free Download"
                icon={ICONS.downloadBlue}
                className="w-full flex items-center justify-center py-3"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourcePreview;
