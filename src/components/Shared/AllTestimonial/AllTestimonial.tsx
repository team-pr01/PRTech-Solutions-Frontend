import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import TextTestimonialCard from "./TextTestimonialCard";

const AllTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Serlina Saui",
      role: "Recent graduate, Marketing at Sweatpals",
      rating: 5.0,
      review:
        "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
      image: IMAGES.dummyClientPicture,
    },
    {
      id: 2,
      name: "Jerry Tang",
      role: "Recent graduate, Marketing at Sweatpals",
      rating: 5.0,
      review:
        "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
      image: IMAGES.dummyClientPicture,
    },
    {
      id: 3,
      name: "Stevano Albert",
      role: "Recent graduate, Marketing at Sweatpals",
      rating: 5.0,
      review:
        "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
      image: IMAGES.dummyClientPicture,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Founder, TechStart",
      rating: 5.0,
      review:
        "The team exceeded our expectations. They delivered a product that perfectly fits our needs and their support has been outstanding.",
      image: IMAGES.dummyClientPicture,
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "CTO, InnovateHub",
      rating: 5.0,
      review:
        "Working with PRTech has been transformative for our business. Their expertise in AI and automation is unmatched.",
      image: IMAGES.dummyClientPicture,
    },
  ];

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="py-12 xl:py-15 2xl:py-25 font-Manrope bg-white">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">TESTIMONIALS</p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5">
              What{" "}
              <span className="font-Playfair-Display italic font-medium">
                Our Clients
              </span>
              are <span className="text-primary-10">Saying</span>
            </h2>

            <p className="description text-neutral-80 max-w-179 mx-auto mb-6 mt-4 2xl:mt-6">
              We help businesses grow with design, strategy, and genuine care
              but don't just take our word for it.
            </p>
          </div>
        </div>
      </Container>

      {/* Row 1 - Right to Left */}
      <div className="mt-12 lg:mt-18 relative overflow-hidden">
        <div className="flex gap-0 lg:gap-6 animate-marquee-right">
          {allTestimonials.map((testimonial, index) => (
            <TextTestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2 - Left to Right */}
      <div className="mt-6 relative overflow-hidden">
        <div className="flex gap-0 lg:gap-6 animate-marquee-left">
          {allTestimonials
            .slice()
            .reverse()
            .map((testimonial, index) => (
              <TextTestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>

      {/* Add styles */}
      <style>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes marquee-left {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
          width: max-content;
        }
        
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
          width: max-content;
        }
        
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AllTestimonial;
