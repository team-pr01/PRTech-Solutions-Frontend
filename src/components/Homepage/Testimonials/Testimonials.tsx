/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Container from "../../Reusable/Container/Container";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { testimonials } from "../../../data/testimonials";


// Card configurations
const cardConfigs = [
  {
    position: "left",
    bg: "bg-white border-neutral-91",
    textColor: "text-neutral-20",
    rotate: "-rotate-11 mt-10",
  },
  {
    position: "center",
    bg: "bg-primary-10 border-primary-10",
    textColor: "text-white",
    rotate: "z-10 shadow-lg",
  },
  {
    position: "right",
    bg: "bg-white border-neutral-91",
    textColor: "text-neutral-20",
    rotate: "rotate-11 mt-10",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSlideChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    handleSlideChange((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    handleSlideChange(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getCardData = (offset: number) => {
    const index =
      (activeIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[index];
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const Card = ({
    data,
    bg,
    textColor,
    rotate,
    isCenter,
    index,
  }: {
    data: any;
    bg: string;
    textColor: string;
    rotate: string;
    isCenter: boolean;
    index: number;
  }) => (
    <motion.div
      key={data.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-86 lg:w-100 xl:w-109 h-127.75 rounded-[30px] xl:rounded-[40px] p-5 lg:p-10 text-center flex flex-col items-center border select-none ${index % 2 === 0 ? "mt-20" : "mt-0"} ${bg} ${textColor} ${rotate}`}
    >
      <img
        src={data.image}
        className="size-18 rounded-full object-cover"
        alt=""
      />

      <h2 className="text-2xl font-medium mt-4">{data.name}</h2>
      <p className="text-sm mt-2 font-light">{data.role}</p>

      <div className="flex items-center justify-center gap-1 mt-20">
        {Array.from({ length: 5 }).map((_, i) => {
          const ratingValue = Number(data.rating);

          if (i < Math.floor(ratingValue)) {
            // Full star
            return (
              <FaStar
                key={i}
                className={`text-xl lg:text-2xl ${isCenter ? "text-white" : "text-[#FF5F5F]"}`}
              />
            );
          } else if (i === Math.floor(ratingValue) && ratingValue % 1 !== 0) {
            // Half star
            return (
              <FaStarHalfAlt
                key={i}
                className={`text-xl lg:text-2xl ${isCenter ? "text-white" : "text-[#FF5F5F]"}`}
              />
            );
          } else {
            // Empty star (optional, if you want to show greyed out stars)
            return (
              <FaRegStar
                key={i}
                className={`text-xl lg:text-2xl ${isCenter ? "text-white/30" : "text-[#FF5F5F]/30"}`}
              />
            );
          }
        })}
        <p className="text-lg ml-2">{data.rating}</p>
      </div>

      <p className="text-base lg:text-lg mt-6 line-clamp-4">"{data.text}"</p>
    </motion.div>
  );

  return (
    <div
      id="testimonials"
      className="sectionPadding font-Manrope overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-neutral-70 subHeading">TESTIMONIALS</p>
          </div>

          <h2 className="text-neutral-70 heading mt-2.5">
            What Our{" "}
            <span className="font-Playfair-Display italic font-medium">
              Clients
            </span>{" "}
            are <span className="text-primary-10">Saying</span>{" "}
          </h2>

          <p className="description text-neutral-80 max-w-130 mx-auto mb-6 mt-4 2xl:mt-6">
            We help businesses grow with design, strategy, and genuine care but
            don't just take our word for it.
          </p>
        </div>

        {/* Cards - Fixed centering and overflow */}
        <div className="-mt-4 xl:mt-18 flex justify-center items-center px-2">
          <div className="flex justify-center items-center gap-14">
            <AnimatePresence mode="wait" custom={direction}>
              {cardConfigs.map((config, idx) => {
                const offset = idx === 0 ? -1 : idx === 1 ? 0 : 1;
                const isCenter = idx === 1;
                return (
                  <Card
                    key={`card-${activeIndex}-${idx}`}
                    data={getCardData(offset)}
                    bg={config.bg}
                    textColor={config.textColor}
                    rotate={config.rotate}
                    isCenter={isCenter}
                    index={idx}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-20 mt-0 xl:mt-10">
          <button
            onClick={prevSlide}
            className="size-10 rounded-full bg-white border border-neutral-65 text-neutral-65 text-lg hover:bg-primary-10 hover:text-white hover:border-primary-10 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            <LuArrowLeft />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 h-2 bg-primary-10"
                    : "w-2 h-2 bg-neutral-50/50 hover:bg-primary-10/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="size-10 rounded-full bg-primary-10 border border-primary-10 text-white text-lg hover:bg-primary-10/80 transition duration-300 flex items-center justify-center cursor-pointer"
          >
            <LuArrowRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
