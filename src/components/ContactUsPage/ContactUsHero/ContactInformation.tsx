import { ICONS } from "../../../assets";

interface ContactDetail {
  text: string;
  href?: string;
}
interface ContactItem {
  label: string;
  icon: string;
  details: ContactDetail[];
}
const ContactInformation = () => {
  const contactDetails: ContactItem[] = [
    {
      label: "Phone",
      icon: ICONS.phoneDark,
      details: [
        {
          text: "+91 93599 63665 (IND)",
          href: "tel:+919359963665",
        },
        // {
        //   text: "+880 1572-915890 (BD)",
        //   href: "tel:+8801572915890",
        // },
      ],
    },
    {
      label: "Location",
      icon: ICONS.locationDark,
      details: [
        {
          text: "1234 Mumbai, Maharashtra 400001",
        },
      ],
    },
    {
      label: "Email",
      icon: ICONS.emailDark,
      details: [
        {
          text: "hello@prtech-solutions.com",
          href: "mailto:hello@prtech-solutions.com",
        },
        // {
        //   text: "support@prtech-solutions.com",
        //   href: "mailto:support@prtech-solutions.com",
        // },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-neutral-86 text-sm font-medium tracking-wide">
            {item.label}
          </p>

          <div className="flex flex-col gap-1 mt-3">
            {item.details.map((detail, idx) =>
              detail.href ? (
                <a
                  key={idx}
                  href={detail.href}
                  className="text-neutral-70 font-medium hover:underline transition-all duration-200 flex items-center gap-3"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="size-5 mt-0.5 shrink-0"
                  />
                  {detail.text}
                </a>
              ) : (
                <div className="flex gap-3">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="size-5 mt-0.5 shrink-0"
                  />
                  <p key={idx} className="text-neutral-70 font-medium">
                    {detail.text}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInformation;
