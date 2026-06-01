export const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};