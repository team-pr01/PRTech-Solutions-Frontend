export const handleScrollToTestimonial = () => {
    const testimonialSection = document.getElementById("testimonials");
    if (testimonialSection) {
        testimonialSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};