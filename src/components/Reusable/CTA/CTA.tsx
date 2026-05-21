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
}: CTAProps) => {
  return (
    <div className={`relative h-170 font-medium overflow-hidden font-Manrope ${className}`}>
      <img
        src={backgroundImage}
        alt=""
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className={`${textColor} text-center text-[48px] font-semibold leading-12 max-w-230 mx-auto`}>
              {title}
            </h2>

            <p className={`${textColor} font-Manrope leading-8 max-w-120 mx-auto font-normal mt-6`}>
              {description}
            </p>

            {showButtons && (
              <div className="flex items-center justify-center gap-6 mt-6">
                {primaryButton && (
                  <Button
                    label={primaryButton.label}
                    onClick={primaryButton.onClick}
                    variant={primaryButton.variant || "primary"}
                  />
                )}
                {secondaryButton && (
                  <Button
                    label={secondaryButton.label}
                    onClick={secondaryButton.onClick}
                    variant={secondaryButton.variant || "tertiary"}
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