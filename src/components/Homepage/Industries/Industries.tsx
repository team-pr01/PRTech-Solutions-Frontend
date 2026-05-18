import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";
import { INDUSTRIES } from "../../../data/industries.data";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const Industries = () => {
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
                INDUSTRIES
              </p>
            </div>

            <h2 className="text-neutral-70 text-[60px] font-semibold leading-15 mt-2.5">
              Who{" "}
              <span className="font-Playfair-Display italic font-medium">
                We
              </span>{" "}
              <span className="text-primary-10">Work With</span>{" "}
            </h2>

            <p className="text-neutral-80 font-Manrope max-w-179 mx-auto font-normal mb-6 leading-normal mt-6">
              We partner with businesses that need more than just a website they
              need systems that drive growth, automate operations, and scale
              efficiently.
            </p>
          </div>

          <div className="mt-18 flex justify-between">
            <div className="w-[40%] sticky top-40 self-start">
              <img src={IMAGES.dummyIndustry} alt="" />
            </div>

            <div className="w-[55%]">
              <div className="flex flex-col gap-13">
                {INDUSTRIES?.map((industry) => (
                  <div className="flex gap-10">
                    <div className="bg-gradient-industry-line opacity-80 w-1"></div>
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-10 border border-neutral-90 shadow-industry-icon p-2.5 rounded-2xl flex items-center justify-center">
                          <img
                            src={industry?.icon}
                            alt=""
                            className="size-7"
                          />
                        </div>
                        <h3 className="text-neutral-65 text-2xl font-medium leading-7">
                          {industry?.title}
                        </h3>
                      </div>

                      <p className="text-neutral-80 mt-4 mb-5">
                        {industry?.description}
                      </p>
                      <Link to={industry?.path}><Button variant="outlinePrimary" label="Learn More" /></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Industries;
