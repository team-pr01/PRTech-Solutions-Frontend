/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";

const ProjectCard = ({project}:any) => {
  return (
    <div className=" font-Manrope">
      <h2 className="text-neutral-70 text-lg xl:text-2xl font-semibold">
        {project?.title}
      </h2>
      <div className="flex items-center gap-2 flex-wrap mt-4 lg:mt-6">
        {project?.tags.map((tag:string, idx:number) => (
          <div
            key={idx}
            className="px-3 py-2 bg-primary-30 rounded-lg text-primary-10 text-xs font-medium"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-6 p-2 rounded-[28px] bg-primary-40">
        <img src={project?.image} alt="" className="rounded-[28px]" />

        <div className="flex items-stretch gap-2 h-full">
          <div className="p-4 bg-white rounded-[20px] mt-2 flex-1">
            <h4 className="text-neutral-80 text-xs font-medium">Key Metrics</h4>
            <p className="text-neutral-65 font-medium mt-2 text-xs">
              {project?.metrics?.map((metric:string, idx:number) => (
                <span key={idx}>
                  {metric}
                  {idx !== project?.metrics?.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
          <a
            href={project?.link}
            target="_blank"
            className="p-6 rounded-[20px] bg-white flex items-center justify-center mt-2"
          >
            <img src={ICONS.arrowRightDark} alt="" className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
