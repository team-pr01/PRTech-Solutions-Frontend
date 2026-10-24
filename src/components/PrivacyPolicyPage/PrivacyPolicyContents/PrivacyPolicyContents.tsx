// components/PrivacyPolicy/PrivacyPolicyContents.tsx
import {
  FiChevronRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiFileText,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicyContents = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="flex-1 min-w-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-white rounded-2xl border border-neutral-91 shadow-sm p-6 md:p-10 space-y-10"
      >
        {/* 1. Introduction */}
        <motion.section
          id="introduction"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            1. Introduction
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              At <strong className="text-neutral-70">PRTech Solutions</strong>{" "}
              ("we," "our," or "us"), we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
            <p>
              By accessing or using our Services, you consent to the data
              practices described in this policy. If you do not agree with the
              terms of this Privacy Policy, please do not access the site or use
              our services.
            </p>
          </div>
        </motion.section>

        {/* 2. Information We Collect */}
        <motion.section
          id="information-we-collect"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            2. Information We Collect
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We may collect information about you in a variety of ways,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-neutral-70">Personal Data:</strong>{" "}
                Personally identifiable information, such as your name, email
                address, and telephone number, that you voluntarily give to us.
              </li>
              <li>
                <strong className="text-neutral-70">Derivative Data:</strong>{" "}
                Information our servers automatically collect when you access
                the Site, such as your IP address, browser type, operating
                system, and access times.
              </li>
              <li>
                <strong className="text-neutral-70">Financial Data:</strong>{" "}
                Financial information, such as data related to your payment
                method, that we may collect when you purchase our services.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 3. How We Use Your Information */}
        <motion.section
          id="how-we-use"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            3. How We Use Your Information
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Create and manage your account.</li>
              <li>Process your transactions and deliver the services you request.</li>
              <li>Email you regarding your account or order.</li>
              <li>Improve the efficiency and operation of the Site and our services.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
            </ul>
          </div>
        </motion.section>

        {/* 4. Disclosure of Your Information */}
        <motion.section
          id="disclosure"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            4. Disclosure of Your Information
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-neutral-70">
                  By Law or to Protect Rights:
                </strong>{" "}
                If we believe the release of information is necessary to respond
                to legal process, we may share your information as permitted or
                required by law.
              </li>
              <li>
                <strong className="text-neutral-70">
                  Third-Party Service Providers:
                </strong>{" "}
                We may share your information with third parties that perform
                services for us, including payment processing and data analysis.
              </li>
              <li>
                <strong className="text-neutral-70">Business Transfers:</strong>{" "}
                We may share or transfer your information in connection with a
                merger, sale of company assets, or acquisition.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 5. Security of Your Information */}
        <motion.section
          id="security"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            5. Security of Your Information
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </p>
          </div>
        </motion.section>

        {/* 6. Your Rights */}
        <motion.section
          id="your-rights"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            6. Your Rights
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              You have certain rights regarding the personal information we hold
              about you. These may include the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Access and receive a copy of the personal information we hold
                about you.
              </li>
              <li>
                Request correction of any inaccurate or incomplete personal
                information.
              </li>
              <li>
                Request deletion of your personal information, subject to
                certain exceptions.
              </li>
              <li>
                Object to or restrict the processing of your personal
                information.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 7. Cookies */}
        <motion.section id="cookies" variants={fadeInUp} className="scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            7. Cookies and Web Beacons
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. Most browsers are set to accept cookies
              by default. You can remove or reject cookies, but be aware that
              such action could affect the availability and functionality of the
              Site.
            </p>
          </div>
        </motion.section>

        {/* 8. Policy for Children */}
        <motion.section
          id="updates"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            8. Policy for Children
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We do not knowingly solicit information from or market to children
              under the age of 13. If you become aware of any data we have
              collected from children under age 13, please contact us using the
              contact information provided below.
            </p>
          </div>
        </motion.section>

        {/* 9. Contact Us */}
        <motion.section
          id="contact"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            9. Contact Us
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <div className="bg-primary-40 rounded-xl p-6 space-y-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-10 flex items-center justify-center shrink-0">
                  <FiMail className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-70 text-sm">Email</p>
                  <a
                    href="mailto:privacy@prtech-solutions.com"
                    className="text-primary-10 hover:underline text-sm block mt-1"
                  >
                    privacy@prtech-solutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-10 flex items-center justify-center shrink-0">
                  <FiPhone className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-70 text-sm">Phone</p>
                  <a
                    href="tel:+919359963665"
                    className="text-primary-10 hover:underline text-sm block mt-1"
                  >
                    +91 93599 63665 (IND)
                  </a>
                  <a
                    href="tel:+8801572915890"
                    className="text-primary-10 hover:underline text-sm block mt-1"
                  >
                    +880 1572-915890 (BD)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-10 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-70 text-sm">
                    Address
                  </p>
                  <p className="text-neutral-80 text-sm mt-1">
                    1234 Mumbai, Maharashtra 400001, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Note */}
        <div className="pt-6 border-t border-neutral-91">
          <div className="flex items-center gap-3 bg-primary-30 rounded-lg p-5">
            <FiShield className="text-primary-10 shrink-0" size={24} />
            <p className="text-neutral-80 text-sm">
              Your privacy is important to us. We are committed to protecting
              your personal data and being transparent about how we use it.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Related Links */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/terms-and-conditions"
          className="flex-1 bg-white rounded-xl border border-neutral-91 p-5 hover:border-primary-10 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-30 flex items-center justify-center">
                <FiFileText className="text-primary-10" />
              </div>
              <div>
                <p className="text-neutral-70 font-semibold text-sm">
                  Terms & Conditions
                </p>
                <p className="text-neutral-80 text-xs mt-0.5">
                  Read our terms of service
                </p>
              </div>
            </div>
            <FiChevronRight className="text-neutral-80 group-hover:text-primary-10 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link
          to="/contact-us"
          className="flex-1 bg-white rounded-xl border border-neutral-91 p-5 hover:border-primary-10 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-30 flex items-center justify-center">
                <FiMail className="text-primary-10" />
              </div>
              <div>
                <p className="text-neutral-70 font-semibold text-sm">
                  Contact Us
                </p>
                <p className="text-neutral-80 text-xs mt-0.5">
                  Get in touch with our team
                </p>
              </div>
            </div>
            <FiChevronRight className="text-neutral-80 group-hover:text-primary-10 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyContents;