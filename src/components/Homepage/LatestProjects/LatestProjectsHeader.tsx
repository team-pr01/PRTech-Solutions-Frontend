import { Link } from "react-router-dom";
import Button from "../../Reusable/Button/Button";

const LatestProjectsHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start 2xl:items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-primary-10"></div>
          </div>
          <p className="text-neutral-70 font-medium uppercase">
            Latest Projects
          </p>
        </div>

        <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
          We Design Solutions for each{" "}
          <span className="text-primary-10">Business’s</span>{" "}
          <span className="font-Playfair-Display italic font-medium">
            Actual Needs
          </span>{" "}
        </h2>
      </div>

      <div className="mt-3 xl:mt-0">
        <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 max-w-90 mb-6 leading-normal">
          Each project below reflects a different challenge ,from automating
          workflows to building scalable platforms and integrating intelligent
          systems.
        </p>
        <Link to={"/contact-us"}>
          <Button label="Make Yours" />
        </Link>
      </div>
    </div>
  );
};

export default LatestProjectsHeader;
