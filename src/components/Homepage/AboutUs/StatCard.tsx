type TStatCardProps = {
  stat: {
    label: string;
    value: number;
    valuePrefix: string;
  };
};

const StatCard: React.FC<TStatCardProps> = ({ stat }) => {
  return (
    <div className="p-3 md:p-4 bg-neutral-40 border border-primary-20 rounded-2xl lg:rounded-[30px] font-Manrope">
      <h2 className="text-neutral-30 text-[44px] 2xl:text-[60px] font-semibold text-shadow-stats-heading">
        {stat?.value}
        <span className="text-primary-10">{stat?.valuePrefix}</span>
      </h2>
      <p className="mt-6 text-neutral-50 text-base 2xl:text-2xl font-medium">
        {stat?.label}
      </p>
    </div>
  );
};

export default StatCard;
