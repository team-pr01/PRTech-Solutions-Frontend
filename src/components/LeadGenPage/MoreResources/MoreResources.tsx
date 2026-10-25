import { useState } from "react";
import Container from "../../Reusable/Container/Container";
import CustomTabs from "../../Reusable/CustomTabs/CustomTabs";
import MoreResourceCard from "./MoreResourceCard";

const MoreResources = () => {
  const industries = ["All", "Fintech", "Healthcare", "SaaS", "Ecommerce"];
  const services = ["All", "Web Design", "Development", "SEO", "Automation"];

  // Tab States
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeService, setActiveService] = useState("All");

  return (
    <div className="bg-neutral-72 sectionPadding font-Manrope overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-neutral-70 font-medium uppercase">Library</p>
          </div>

          <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
            Explore{" "}
            <span className="font-Playfair-Display italic font-medium">
              More
            </span>{" "}
            <span className="text-primary-10">Business’s</span>
          </h2>

          <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 text-center mt-6 leading-normal max-w-2xl">
            Looking for more insights? Explore resources tailored to your
            industry and business needs.
          </p>
        </div>

        {/* Tabs & Cards Container */}
        <div className="mt-14 flex flex-col">
          {/* Tabs Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
            <CustomTabs
              label="Industry"
              options={industries}
              activeTab={activeIndustry}
              onChange={setActiveIndustry}
              layoutIdPrefix="industry"
            />

            <CustomTabs
              label="Service"
              options={services}
              activeTab={activeService}
              onChange={setActiveService}
              layoutIdPrefix="service"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
            <MoreResourceCard />
            <MoreResourceCard />
            <MoreResourceCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoreResources;
