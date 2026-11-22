import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { FiUsers, FiBookOpen, FiTrendingUp } from "react-icons/fi";

const BlogsHero = ({ totalBlogsCount }: { totalBlogsCount: number }) => {
  const handleScrollToBlogs = () => {
    const element = document.getElementById("all-blogs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="bg-gradient-our-work-hero-bg relative min-h-fit md:min-h-0 md:h-170 xl:h-200 font-Manrope pt-10 lg:pt-0 pb-16 md:pb-0">
      <img
        src={IMAGES.blogsHeroImg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Content */}
      <Container>
        <div className="relative z-10 pt-32 md:pt-45 lg:pt-55 2xl:pt-50 left-1/2 -translate-x-1/2 flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-5 2xl:px-0 text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 w-full">
            {/* Image Section - Hidden on Mobile and Tablet */}
            <div className="hidden lg:block rounded-2xl w-full lg:w-1/2 relative">
              <img
                src={IMAGES.dummyBlogs}
                alt="Blog Cover"
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="bg-neutral-10 text-neutral-50 font-medium text-center text-xs px-3 py-2 rounded-lg absolute top-4 left-4 backdrop-blur-md">
                Explore Our Blog
              </div>
            </div>

            {/* Content Section - Full width on mobile/tablet, 1/2 on desktop */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-2">
                <div className="bg-primary-10 text-white font-medium text-center text-xs px-2.5 py-1.5 rounded-3xl">
                  Insights & Stories
                </div>
              </div>

              <h1 className="text-white text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-tight md:leading-12 lg:leading-14 mt-4">
                Stay Informed, Stay Ahead
              </h1>

              <p className="text-white mt-4 mb-6 text-sm md:text-base leading-relaxed max-w-2xl lg:max-w-none">
                Discover practical guides, industry trends, development tips, AI
                insights, and business strategies to help you stay informed,
                make better decisions, and grow with the latest technology.
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8 w-full">
                <div className="flex items-center gap-2">
                  <FiBookOpen className="text-primary-10 text-lg shrink-0" />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg leading-tight">
                      {totalBlogsCount}
                      {totalBlogsCount > 20 ? "+" : ""}
                    </p>
                    <p className="text-white/60 text-[10px] md:text-xs">
                      Articles
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 md:h-10 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-primary-10 text-lg shrink-0" />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg leading-tight">
                      6585K+
                    </p>
                    <p className="text-white/60 text-[10px] md:text-xs">
                      Readers
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 md:h-10 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="text-primary-10 text-lg shrink-0" />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg leading-tight">
                      25K+
                    </p>
                    <p className="text-white/60 text-[10px] md:text-xs">
                      Impressions
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button
                onClick={handleScrollToBlogs}
                variant="secondary"
                label="Explore All Blogs"
                className="w-full md:w-fit flex items-center justify-center mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsHero;
