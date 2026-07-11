import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";

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
                Featured Article
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex items-center gap-2">
                <div className="bg-primary-10 text-white font-medium text-center text-xs px-2.5 py-1.5 rounded-3xl">
                  Product Strategy
                </div>
                <p className="text-white text-sm">8 min read</p>
              </div>
              <h1 className="text-white text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14 mt-4">
                Building Digital Products That Scale With Your Business
              </h1>

              <p className="text-white mt-4 2xl:mt-4 mb-8">
                Discover practical guides, industry trends, development tips, AI
                insights, and business strategies to help you stay informed,
                make better decisions, and grow with the latest technology.
              </p>

              <Link to="/contact-us">
                <Button
                  variant="secondary"
                  label="Read Article"
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
