import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const ClientsTestimonial = () => {
  // Example data for the single testimonial
  const testimonial = {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    company: "XYZ Company",
    rating: 5,
    review:
      "PRTech Solutions completely transformed how we handle our customer operations. The custom system they built didn't just solve our immediate bottlenecks—it gave us a scalable foundation that has supported a 4x growth in our user base without any added operational friction.",
    image: IMAGES.dummyClientPicture, // Replace with actual client image
  };

  return (
    <div className="relative h-fit font-Manrope overflow-x-auto bg-neutral-20">
      {/* Background Image matching your BeforeVsAfter component */}
      <img
        src={IMAGES.beforeVsAfterBg}
        alt="Testimonial Background"
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading uppercase tracking-wider">
                Client Feedback
              </p>
            </div>

            <h2 className="heading text-white text-center max-w-150 mx-auto mt-2.5">
              What <span className="text-primary-10 font-semibold ">Sarah Johnson</span>{" "}
              Says {" "}
              <span className="font-Playfair-Display italic">
                About Us
              </span>
            </h2>
          </div>

          {/* Centered Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-60 backdrop-blur-[49.5px] border border-white/10 rounded-3xl p-8 md:p-12 relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 overflow-hidden">
              {/* Background Gradient for depth */}
              <div className="bg-gradient-after-card absolute top-0 bottom-0 right-0 left-0 opacity-40 pointer-events-none" />

              {/* Left Side: Client Profile */}
              <div className="relative z-10 flex flex-col items-center text-center shrink-0 w-full md:w-auto">
                <div className="size-24 md:size-32 rounded-full overflow-hidden border-4 border-primary-10/30 mb-4 shadow-xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white text-2xl font-bold">
                  {testimonial.name}
                </h4>
                <p className="text-white text-sm mt-1">
                  {testimonial.role}
                </p>
                <p className="text-neutral-66/70 text-xs mt-1 uppercase tracking-wider">
                  {testimonial.company}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" size={14} />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">
                    {testimonial.rating}.0
                  </span>
                </div>
              </div>

              {/* Right Side: The Review */}
              <div className="relative z-10 flex-1 flex flex-col justify-center h-full pt-4 md:pt-0">
                <RiDoubleQuotesL className="text-primary-10/30 text-5xl mb-2" />
                <p className="text-white text-lg md:text-xl leading-relaxed font-light italic">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default ClientsTestimonial;