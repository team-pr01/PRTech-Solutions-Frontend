// components/Reusable/CTA/CTA.tsx
import { IMAGES } from "../../../assets";
import Button from "../Button/Button";
import Container from "../Container/Container";

interface CTAProps {
  backgroundImage?: string;
  title: string;
  description: string;
  primaryButton?: {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
  };
  secondaryButton?: {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
  };
  showButtons?: boolean;
  className?: string;
  textColor?: string;
  contentAlignment?: "left" | "center" | "right";
}

const CTA = ({
  backgroundImage = IMAGES.ctaBg1,
  title,
  description,
  primaryButton,
  secondaryButton,
  showButtons = true,
  className = "",
  textColor = "text-white",
  contentAlignment = "center",
}: CTAProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const buttonAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const marginAuto = {
    left: "ml-0 mr-auto",
    center: "mx-auto",
    right: "ml-auto mr-0",
  };

  return (
    <div
      className={`relative h-140 font-medium overflow-hidden font-Manrope ${className}`}
    >
      <img
        src={backgroundImage}
        alt=""
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div
            className={`flex flex-col ${alignmentClasses[contentAlignment]} justify-center`}
          >
            <h2
              className={`${textColor} text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-12 max-w-230 ${marginAuto[contentAlignment]}`}
            >
              {title}
            </h2>

            <p
              className={`${textColor} description max-w-150 mt-4 xl:mt-6 ${marginAuto[contentAlignment]}`}
            >
              {description}
            </p>

            {showButtons && (
              <div
                className={`flex flex-col w-full md:flex-row ${buttonAlignment[contentAlignment]} gap-6 mt-6`}
              >
                {primaryButton && (
                  <Button
                    label={primaryButton.label}
                    onClick={primaryButton.onClick}
                    variant={primaryButton.variant || "primary"}
                    className="w-full md:w-fit"
                  />
                )}
                {secondaryButton && (
                  <Button
                    label={secondaryButton.label}
                    onClick={secondaryButton.onClick}
                    variant={secondaryButton.variant || "tertiary"}
                    className="w-full md:w-fit"
                  />
                )}
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CTA;
