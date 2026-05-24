import { ICONS } from "../../../assets";

const Button = ({
  type = "button",
  variant = "primary",
  label,
  onClick,
  className = "",
}: {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "outlinePrimary";
  label: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-xs md:text-sm rounded-[30px] py-2 pr-2 pl-8 font-Manrope font-medium flex items-center gap-3 w-fit border h-fit ${className} ${
        variant === "primary"
          ? "border-primary-15 bg-gradient-primary-button text-white"
          : variant === "secondary"
            ? "bg-white border-white text-neutral-65"
            : variant === "outlinePrimary"
              ? "border-primary-10 bg-transparent text-neutral-65"
              : "border-white bg-none text-white"
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
