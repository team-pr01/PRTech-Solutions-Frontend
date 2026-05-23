import { FaStar } from "react-icons/fa";
import { ICONS } from "../../../assets";

type TextTestimonialCardProps = {
  testimonial: {
    id: number;
    name: string;
    role: string;
    rating: number;
    review: string;
    image: string;
  };
};

const TextTestimonialCard: React.FC<TextTestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white border border-neutral-91 p-4 rounded-[48px] w-175 shrink-0 mx-2">
      <div className="flex items-center gap-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="size-45 rounded-[40px] object-cover"
        />
        <div>
          <h3 className="text-neutral-65 text-2xl font-medium">
            {testimonial.name}
          </h3>
          <p className="text-neutral-65 mt-2">{testimonial.role}</p>

          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-2xl text-[#FF5F5F]" />
            ))}
            <p className="text-lg ml-2">{testimonial.rating}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-5">
        <img src={ICONS.quotation} alt="" className="size-6" />
        <p className="text-neutral-86 text-2xl font-semibold mt-6 leading-relaxed line-clamp-3">
          "{testimonial.review}"
        </p>
      </div>
    </div>
  );
};

export default TextTestimonialCard;
