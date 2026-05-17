import { ICONS } from "../../../assets";

const Button = ({
  variant = "primary",
  label,
  onClick,
}: {
  variant?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[30px] py-2 pr-2 pl-8 text-white font-Manrope font-medium flex items-center gap-3 w-fit border ${
        variant === "primary"
          ? "border-primary-15 bg-gradient-primary-button"
          : "border-white bg-none"
      }`}
    >
      {label}
      <div
        className={`size-7 rounded-full flex items-center justify-center ${variant === "primary" ? "bg-white" : "bg-primary-10"}`}
      >
        <img
          src={
            variant === "primary"
              ? ICONS.arrowRightUpBlue
              : ICONS.arrowRightUpWhite
          }
          alt="arrow"
          className="size-4"
        />
      </div>
    </button>
  );
};

export default Button;
