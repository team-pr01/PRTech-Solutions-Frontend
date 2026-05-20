import { FaStar } from "react-icons/fa";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Testimonials = () => {
  return (
    <div className="py-25 font-Manrope">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">
                TESTIMONIALS
              </p>
            </div>

            <h2 className="text-neutral-70 text-[60px] font-semibold leading-15 mt-2.5">
              What Our{" "}
              <span className="font-Playfair-Display italic font-medium">
                Clients
              </span>{" "}
              are <span className="text-primary-10">Saying</span>{" "}
            </h2>

            <p className="text-neutral-80 font-Manrope max-w-130 mx-auto font-normal mb-6 leading-normal mt-6">
              We help businesses grow with design, strategy, and genuine care
              but don’t just take our word for it.
            </p>
          </div>

          <div className="mt-18 flex justify-between gap-14">
            <div className="w-109 h-[511px] rounded-[40px] bg-white text-neutral-20 border border-neutral-91 p-10 text-center flex flex-col items-center -rotate-11 mt-10">
              <img
                src={IMAGES.dummyClientPicture}
                alt=""
                className="size-18.71 rounded-full"
              />
              <h2 className="text-2xl font-medium mt-4">John Doe</h2>
              <p className="text-sm mt-2 font-light">
                CEO, Bright Tuition Care
                <br />
              </p>

              <div className="flex items-center justify-center gap-1 mt-20">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-2xl text-[#FF5F5F]" />
                ))}
                <p className="text-lg ml-2">5.0</p>
              </div>
              <p className="text-lg mt-6">
                "I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
                It's really great how easy your websites are to update and
                manage."
              </p>
            </div>
            
            <div className="w-109 h-[511px] rounded-[40px] bg-primary-10 text-white border border-primary-10 p-10 text-center flex flex-col items-center">
              <img
                src={IMAGES.dummyClientPicture}
                alt=""
                className="size-18.71 rounded-full"
              />
              <h2 className="text-2xl font-medium mt-4">John Doe</h2>
              <p className="text-sm mt-2 font-light">
                CEO, Bright Tuition Care
                <br />
              </p>

              <div className="flex items-center justify-center gap-1 mt-20">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-2xl" />
                ))}
                <p className="text-lg ml-2">5.0</p>
              </div>
              <p className="text-lg mt-6">
                "I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
                It's really great how easy your websites are to update and
                manage."
              </p>
            </div>

             <div className="w-109 h-[511px] rounded-[40px] bg-white text-neutral-20 border border-neutral-91 p-10 text-center flex flex-col items-center rotate-11 mt-10">
              <img
                src={IMAGES.dummyClientPicture}
                alt=""
                className="size-18.71 rounded-full"
              />
              <h2 className="text-2xl font-medium mt-4">John Doe</h2>
              <p className="text-sm mt-2 font-light">
                CEO, Bright Tuition Care
                <br />
              </p>

              <div className="flex items-center justify-center gap-1 mt-20">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-2xl text-[#FF5F5F]" />
                ))}
                <p className="text-lg ml-2">5.0</p>
              </div>
              <p className="text-lg mt-6">
                "I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
                It's really great how easy your websites are to update and
                manage."
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-20 mt-10">
                    <button
                      className="size-10 rounded-full bg-white border border-neutral-65 text-neutral-65 text-lg hover:bg-primary-10 hover:text-white hover:border-primary-10 transition duration-300 flex items-center justify-center"
                    >
                      <LuArrowLeft />
                    </button>
          
                    {/* Custom Pagination Dots */}
                    {/* <div className="flex items-center gap-3">
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
                    </div> */}
          
                    <button
                      // onClick={() => swiperRef.current?.slideNext()}
                      className="size-10 rounded-full bg-primary-10 border border-primary-10 text-white text-lg hover:bg-primary-10/80 transition duration-300 flex items-center justify-center"
                    >
                      <LuArrowRight />
                    </button>
                  </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
