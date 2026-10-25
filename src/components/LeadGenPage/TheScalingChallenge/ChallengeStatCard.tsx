/* eslint-disable @typescript-eslint/no-explicit-any */

const ChallengeStatCard = ({ stat }: any) => {
  return (
    <div className="px-6 py-8 md:py-10 border border-white/20 bg-neutral-60 backdrop-blur-[20px] rounded-4xl text-start flex flex-col justify-between">
      <h4 className="heading text-white">
        {stat.value}
        <span className="text-primary-10">{stat.suffix}</span>
      </h4>
      <p className="description text-white/90 text-base md:text-lg mt-8 md:mt-12">
        {stat.description}
      </p>
    </div>
  );
};

export default ChallengeStatCard;
