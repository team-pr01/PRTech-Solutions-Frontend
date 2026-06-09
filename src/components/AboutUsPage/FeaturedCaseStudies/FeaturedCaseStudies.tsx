import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { ICONS, IMAGES } from "../../../assets";

const FeaturedCaseStudies = () => {
  return (
    <div className="font-Manrope sectionPadding">
      <Container>
        <div className="flex flex-col xl:flex-row items-start 2xl:items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">
                Featured Case Studies
              </p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
              Our Clients{" "}
              <span className="text-primary-10 font-Playfair-Display italic">
                Success Stories
              </span>{" "}
            </h2>
          </div>

          <div className="mt-3 xl:mt-0">
            <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 max-w-90 mb-6 leading-normal">
              Real projects, real impact. See how we've helped businesses
              transform their operations.
            </p>
            {/* <Link to={"/our-work"}>
            <Button label="View All Projects" />
          </Link> */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="bg-primary-40 rounded-2xl">
            {/* Image */}
            <div className="relative">
              <img src={IMAGES.seo} alt="" className="rounded-t-2xl" />
              <div className="flex items-center gap-1.5 absolute bottom-4 left-4">
                <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
                  Tuition Media
                </div>
                <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
                  Custom Software
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-neutral text-neutral-65 text-2xl font-semibold">
                  Btc High-Frequency Custodial Pipeline
                </h2>
                <p className="text-neutral-86">
                  Built a sub-millisecond transaction processing engine handling
                  dual-ledger validation and cold-vault automation.
                </p>

                <div className="my-6 border-y border-primary-35">
                  <div className=" text-center flex items-center justify-between max-w-[80%] mx-auto py-6">
                    <div>
                      <h3 className="text-neutral text-neutral-65 text-xl font-semibold ">
                        {"<15ms"}
                      </h3>
                      <p className="text-neutral-86 mt-2">
                        Transaction Latency
                      </p>
                    </div>
                    <div>
                      <h3 className="text-neutral text-neutral-65 text-xl font-semibold ">
                        $4.2M+
                      </h3>
                      <p className="text-neutral-86 mt-2">
                        Daily Volume Active
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/case-studies`}
                  className="text-neutral-65 text-lg font-medium flex items-center gap-2"
                >
                  Read case study
                  <img src={ICONS.arrowRightUpBlue} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 xl:mt-12 2xl:mt-16">
          <Link to={"/case-studies"}>
            <Button
              label="View all case studies"
              className="w-full md:w-fit py-2"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCaseStudies;
