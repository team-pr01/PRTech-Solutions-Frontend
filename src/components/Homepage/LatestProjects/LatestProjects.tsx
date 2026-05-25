import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Container from "../../Reusable/Container/Container";
import { IMAGES } from "../../../assets";
import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import LatestProjectsHeader from "./LatestProjectsHeader";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample project data
const projectsData = [
  {
    id: 1,
    name: "Bright Tuition Care",
    link: "https://brighttuitioncare.com/",
    title:
      "Scaling a Tutor Marketplace 4× Faster with a Structured Hiring Platform",
    tags: [
      "Marketplace Platform",
      "Workflow Automation",
      "Operational Scaling",
      "Dashboard System",
      "EdTech",
    ],
    metrics: [
      "4× increase in registrations",
      "60% reduction in hiring time",
      "10k+ active tutors",
      "98% customer satisfaction",
    ],
    image: IMAGES.dummyProject,
  },
  {
    id: 2,
    name: "HealthCare Plus",
    link: "/",
    title: "AI-Powered Patient Management System Reducing Wait Times by 70%",
    tags: [
      "Healthcare",
      "AI Integration",
      "Patient Portal",
      "Analytics Dashboard",
    ],
    metrics: [
      "70% reduction in wait times",
      "50k+ patients managed",
      "30% cost reduction",
      "24/7 automated support",
    ],
    image: IMAGES.dummyProject,
  },
  {
    id: 3,
    name: "FinTech Wallet",
    link: "/",
    title: "Digital Payment Platform Processing $100M+ in Transactions",
    tags: ["Fintech", "Payment Gateway", "Security", "Mobile App"],
    metrics: [
      "$100M+ transactions processed",
      "500k+ active users",
      "99.99% uptime",
      "40% faster payments",
    ],
    image: IMAGES.dummyProject,
  },
];

const LatestProjects = () => {
  const [activeIndustryTab, setActiveIndustryTab] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const industries = ["All", "Fintech", "Healthcare", "SaaS", "E-commerce"];
  const currentProject = projectsData[activeIndex];

  return (
    <div className="bg-gradient-latest-project-bg sectionPadding font-Manrope">
      <Container>
        {/* Header */}
        <LatestProjectsHeader />

        <div className="mt-12.5 flex flex-col xl:flex-row justify-between gap-6 2xl:gap-8">
          {/* Industries tab */}
          <div className="flex flex-row xl:flex-col overflow-auto gap- w-full xl:w-[20%]">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustryTab(industry)}
                className={`py-2 px-5 text-sm 2xl:text-lg text-nowrap font-medium text-left rounded-3xl 2xl:rounded-[70px] w-fit transition duration-300 ${
                  activeIndustryTab === industry
                    ? "bg-primary-10 text-white"
                    : "text-neutral-85 hover:bg-primary-10/10 hover:text-primary-10"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-5 w-full xl:w-[80%]">
            {/* Middle part - Carousel */}
            <div className="w-full lg:w-[60%]">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={false}
                className="rounded-[20px] overflow-hidden"
              >
                {projectsData.map((project) => (
                  <SwiperSlide key={project.id}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full object-cover rounded-[20px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right part */}
            <div className="flex flex-col justify-between h-full w-full lg:w-[38%]">
              <div>
                <h3 className="text-neutral-70 font-semibold text-lg">
                  <Link
                    to={currentProject?.link || "/"}
                    target="_blank"
                    className="text-primary-10 underline"
                  >
                    {currentProject?.name}
                  </Link>{" "}
                  {currentProject?.title}
                </h3>

                <div className="flex items-center gap-2 flex-wrap mt-3">
                  {currentProject?.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-primary-30 rounded-lg text-primary-10 text-[10px] 2xl:text-xs font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-project-metrics-bg p-4 rounded-xl mt-3 lg:mt-6 2xl:mt-10">
                <h4 className="text-neutral-80 text-xs font-medium">
                  Key Metrics
                </h4>
                <div className="flex flex-col gap-2 mt-2">
                  {currentProject?.metrics.map((metric, idx) => (
                    <p
                      key={idx}
                      className="text-neutral-65 font-medium border-b border-primary-35 pb-3 text-xs 2xl:text-sm"
                    >
                      {metric}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons and pagination dots */}
        <div className="flex items-center justify-center gap-20 mt-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="size-10 rounded-full bg-white border border-neutral-65 text-neutral-65 text-lg hover:bg-primary-10 hover:text-white hover:border-primary-10 transition duration-300 flex items-center justify-center"
          >
            <LuArrowLeft />
          </button>

          {/* Custom Pagination Dots */}
          <div className="flex items-center gap-3">
            {projectsData.map((_, idx) => (
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
      </Container>
    </div>
  );
};

export default LatestProjects;
