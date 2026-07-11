import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { FiUsers, FiBookOpen, FiTrendingUp } from "react-icons/fi";

const BlogsHero = () => {
  return (
    <div className="bg-gradient-our-work-hero-bg relative h-170 xl:h-200 font-Manrope">
      <img src={IMAGES.blogsHeroImg} alt="hero-bg" className="w-full h-full" />

      {/* Content */}
      <Container>
        <div className="absolute top-45 md:top-50 lg:top-55 2xl:top-50 left-1/2 -translate-x-1/2 flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-5 2xl:px-0 text-left">
          <div className="flex items-center gap-12">
            <div className="rounded-2xl w-1/2 relative">
              <img src={IMAGES.dummyBlogs} alt="" className="rounded-2xl" />
              <div className="bg-neutral-10 text-neutral-50 font-medium text-center text-xs px-3 py-2 rounded-lg absolute top-2 left-2">
                Explore Our Blog
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex items-center gap-2">
                <div className="bg-primary-10 text-white font-medium text-center text-xs px-2.5 py-1.5 rounded-3xl">
                  Insights & Stories
                </div>
              </div>
              <h1 className="text-white text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14 mt-4">
                Stay Informed, Stay Ahead
              </h1>

              <p className="text-white mt-4 mb-6">
                Discover practical guides, industry trends, development tips, AI
                insights, and business strategies to help you stay informed,
                make better decisions, and grow with the latest technology.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FiBookOpen className="text-primary-10 text-lg" />
                  <div>
                    <p className="text-white font-semibold text-lg">50+</p>
                    <p className="text-white/60 text-xs">Articles</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-primary-10 text-lg" />
                  <div>
                    <p className="text-white font-semibold text-lg">9K+</p>
                    <p className="text-white/60 text-xs">Readers</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="text-primary-10 text-lg" />
                  <div>
                    <p className="text-white font-semibold text-lg">20K</p>
                    <p className="text-white/60 text-xs">Impressions</p>
                  </div>
                </div>
              </div>

              <Link to="/blog">
                <Button
                  variant="secondary"
                  label="Explore All Blogs"
                  className="w-full md:w-fit"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsHero;
