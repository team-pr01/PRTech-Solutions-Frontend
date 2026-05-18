import { Link } from "react-router-dom";
import Button from "../../Reusable/Button/Button";

const LatestProjectsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-primary-10"></div>
          </div>
          <p className="text-neutral-70 font-medium uppercase">
            Latest Projects
          </p>
        </div>

        <h2 className="text-neutral-70 text-[60px] font-semibold leading-15 mt-2.5">
          We Design Solutions for each{" "}
          <span className="text-primary-10">Business’s</span>{" "}
          <span className="font-Playfair-Display italic font-medium">
            Actual Needs
          </span>{" "}
        </h2>
      </div>

      <div>
        <p className="text-neutral-80 font-Manrope max-w-83 font-normal mb-6 leading-normal">
          Each project below reflects a different challenge ,from automating
          workflows to building scalable platforms and integrating intelligent
          systems.
        </p>
        <Link to={"/portfolio"}><Button label="View All Projects" /></Link>
      </div>
    </div>
  );
};

export default LatestProjectsHeader;
