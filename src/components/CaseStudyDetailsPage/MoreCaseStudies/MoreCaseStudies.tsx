import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Container from "../../Reusable/Container/Container";
import MoreCaseStudyCard from "./MoreCaseStudyCard/MoreCaseStudyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const MoreCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const moreCaseStudies = [1, 2, 3, 4, 5];
  return (
    <div className="sectionPadding font-Manrope bg-neutral-72">
      <Container>
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-neutral-70 subHeading">Case Studies</p>
          </div>

          <h2 className="text-neutral-70 heading mt-2.5">
            Explore more{" "}
            <span className="font-Playfair-Display italic font-medium">
              case
            </span>{" "}
            <span className="text-primary-10">studies</span>
          </h2>
        </div>
      </Container>

      <div className="mt-17.5 pl-80">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2.2}
          navigation={false}
          pagination={false}
          className="rounded-[20px] overflow-hidden"
        >
          {moreCaseStudies.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <MoreCaseStudyCard caseStudy={caseStudy} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons and pagination dots */}
      <div className="flex items-center justify-center gap-20 mt-10 max-w-300 2xl:max-w-7xl w-full mx-auto px-4 2xl:px-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="size-10 rounded-full bg-white border border-neutral-65 text-neutral-65 text-lg hover:bg-primary-10 hover:text-white hover:border-primary-10 transition duration-300 flex items-center justify-center"
        >
          <LuArrowLeft />
        </button>

        {/* Custom Pagination Dots */}
        <div className="flex items-center gap-3">
          {moreCaseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? "w-8 h-2 bg-primary-10"
                  : "w-2 h-2 bg-neutral-50/50 hover:bg-primary-10/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="size-10 rounded-full bg-primary-10 border border-primary-10 text-white text-lg hover:bg-primary-10/80 transition duration-300 flex items-center justify-center"
        >
          <LuArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MoreCaseStudies;
