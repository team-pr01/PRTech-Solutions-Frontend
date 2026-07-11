import { useState } from "react";
import Container from "../../Reusable/Container/Container";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Fintech", "Healthcare", "SaaS", "E-commerce"];
  return (
    <div className="bg-gradient-latest-project-bg sectionPadding font-Manrope">
      <Container>
        <div className="flex items-center justify-center overflow-auto gap-5 w-full mx-auto">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-5 text-sm 2xl:text-base text-nowrap font-medium text-left rounded-3xl 2xl:rounded-[70px] w-fit transition duration-300 ${
                selectedCategory === category
                  ? "bg-primary-10 text-white"
                  : "text-neutral-85 bg-primary-10/10 hover:bg-primary-10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs;
