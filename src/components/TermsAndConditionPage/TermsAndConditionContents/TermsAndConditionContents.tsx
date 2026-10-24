import {
  FiChevronRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiLock,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsAndConditionContents = () => {
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
              Welcome to{" "}
              <strong className="text-neutral-70">PRTech Solutions</strong>{" "}
              ("we," "our," or "us"). These Terms and Conditions ("Terms")
              govern your access to and use of our website, products, and
              services (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree with any part of these Terms, you must
              not use our Services.
            </p>
            <p>
              These Terms apply to all visitors, users, clients, and others who
              access or use our Services, including but not limited to custom
              software development, web and mobile application development,
              AI-powered systems, UI/UX design, cloud infrastructure, and
              ongoing maintenance services.
            </p>
          </div>
        </motion.section>

        {/* 2. Definitions */}
        <motion.section
          id="definitions"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            2. Definitions
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>For the purposes of these Terms:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-neutral-70">"Company"</strong> refers to
                PRTech Solutions, its subsidiaries, and affiliates.
              </li>
              <li>
                <strong className="text-neutral-70">"Client"</strong> refers to
                any individual or entity that engages our Services.
              </li>
              <li>
                <strong className="text-neutral-70">"Deliverables"</strong>{" "}
                means all software, code, designs, documentation, and other
                materials we create for you.
              </li>
              <li>
                <strong className="text-neutral-70">
                  "Confidential Information"
                </strong>{" "}
                means any non-public information disclosed by either party.
              </li>
              <li>
                <strong className="text-neutral-70">"Services"</strong> means
                all software development, design, consulting, and related
                services provided by PRTech Solutions.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 3. Acceptance of Terms */}
        <motion.section
          id="acceptance"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            3. Acceptance of Terms
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              By accessing or using our Services, you confirm that you are at
              least 18 years of age, have the legal capacity to enter into a
              binding agreement, and agree to comply with these Terms.
            </p>
            <p>
              If you are using our Services on behalf of a company or other
              legal entity, you represent and warrant that you have the
              authority to bind such entity to these Terms.
            </p>
          </div>
        </motion.section>

        {/* 4. Our Services */}
        <motion.section
          id="services"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            4. Our Services
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              PRTech Solutions provides the following services, subject to
              separate agreements and statements of work:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Custom product and application development</li>
              <li>UI/UX and conversion-focused design</li>
              <li>Cloud, DevOps, and system infrastructure</li>
              <li>Ongoing maintenance and performance optimization</li>
              <li>Business automation and AI systems</li>
              <li>Strategy and technical consultation</li>
            </ul>
            <p>
              The scope, timeline, and deliverables for each project will be
              defined in a separate Statement of Work ("SOW") or Service
              Agreement signed by both parties.
            </p>
          </div>
        </motion.section>

        {/* 5. User Obligations */}
        <motion.section
          id="user-obligations"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            5. User Obligations
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>When using our Services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                Provide accurate, current, and complete information as requested
              </li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>
                Use our Services only for lawful purposes and in accordance with
                these Terms
              </li>
              <li>
                Not interfere with or disrupt the integrity or performance of
                our Services
              </li>
              <li>
                Not attempt to gain unauthorized access to our systems or
                networks
              </li>
              <li>
                Not reproduce, distribute, or resell any part of our Services
                without written permission
              </li>
              <li>
                Comply with all applicable local, state, national, and
                international laws
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 6. Intellectual Property */}
        <motion.section
          id="intellectual-property"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            6. Intellectual Property Rights
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-neutral-70">Client Ownership:</strong>{" "}
              Upon full payment for the Services, all custom code, designs, and
              deliverables specifically created for you under a SOW will be
              owned by you.
            </p>
            <p>
              <strong className="text-neutral-70">PRTech Ownership:</strong> We
              retain ownership of all pre-existing tools, frameworks, libraries,
              methodologies, and know-how used in delivering our Services. We
              may reuse these in other projects.
            </p>
            <p>
              <strong className="text-neutral-70">License:</strong> We grant you
              a non-exclusive, non-transferable license to use any pre-existing
              materials incorporated into your deliverables, solely for your
              internal business purposes.
            </p>
            <p>
              <strong className="text-neutral-70">Website Content:</strong> All
              content on this website, including text, graphics, logos, and
              images, is the property of PRTech Solutions and protected by
              copyright and trademark laws.
            </p>
          </div>
        </motion.section>

        {/* 7. Payment Terms */}
        <motion.section
          id="payment"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            7. Payment Terms
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              Payment terms are defined in the applicable SOW or Service
              Agreement. Unless otherwise specified:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                A non-refundable deposit is required before project commencement
              </li>
              <li>
                Milestone-based payments are due within 15 days of invoice
              </li>
              <li>
                Late payments may incur interest at 1.5% per month or the
                maximum allowed by law
              </li>
              <li>
                All fees are exclusive of applicable taxes (GST, VAT, etc.)
              </li>
              <li>
                Third-party costs (hosting, licenses, APIs) are billed
                separately
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 8. Confidentiality */}
        <motion.section
          id="confidentiality"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            8. Confidentiality
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              Each party agrees to keep the other party's Confidential
              Information confidential and not to disclose it to any third party
              without prior written consent. This obligation survives the
              termination of these Terms for a period of three (3) years.
            </p>
            <p>
              We may sign a separate Non-Disclosure Agreement (NDA) upon request
              before discussing project details.
            </p>
          </div>
        </motion.section>

        {/* 9. Limitation of Liability */}
        <motion.section
          id="limitation"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            9. Limitation of Liability
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              To the maximum extent permitted by law, PRTech Solutions shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities.
            </p>
            <p>
              Our total aggregate liability arising from or related to these
              Terms or the Services shall not exceed the total amount paid by
              you to PRTech Solutions in the twelve (12) months preceding the
              claim.
            </p>
            <p>
              Our Services are provided "as is" and "as available" without
              warranties of any kind, either express or implied, including but
              not limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
          </div>
        </motion.section>

        {/* 10. Termination */}
        <motion.section
          id="termination"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            10. Termination
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              Either party may terminate a Service Agreement with thirty (30)
              days' written notice. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                You must pay for all work performed and expenses incurred up to
                the termination date
              </li>
              <li>
                We will deliver all completed work and work-in-progress for
                which payment has been received
              </li>
              <li>
                Each party will return or destroy the other party's Confidential
                Information
              </li>
            </ul>
            <p>
              We may terminate access to our Services immediately if you breach
              these Terms.
            </p>
          </div>
        </motion.section>

        {/* 11. Governing Law */}
        <motion.section
          id="governing-law"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            11. Governing Law & Dispute Resolution
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms shall first
              be attempted to be resolved through good-faith negotiations. If
              unresolved within thirty (30) days, the dispute shall be submitted
              to binding arbitration in Mumbai, India, in accordance with the
              Arbitration and Conciliation Act, 1996.
            </p>
          </div>
        </motion.section>

        {/* 12. Changes to Terms */}
        <motion.section
          id="changes"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            12. Changes to Terms
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              We reserve the right to modify or replace these Terms at any time
              at our sole discretion. We will provide notice of any material
              changes by posting the new Terms on this page and updating the
              "Last Updated" date.
            </p>
            <p>
              Your continued use of our Services after any such changes
              constitutes your acceptance of the new Terms. We encourage you to
              review these Terms periodically.
            </p>
          </div>
        </motion.section>

        {/* 13. Contact Us */}
        <motion.section
          id="contact"
          variants={fadeInUp}
          className="scroll-mt-28"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-70 mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-primary-10 rounded-full" />
            13. Contact Us
          </h2>
          <div className="space-y-4 text-neutral-80 text-sm md:text-base leading-relaxed">
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="bg-primary-40 rounded-xl p-6 space-y-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-10 flex items-center justify-center shrink-0">
                  <FiMail className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-70 text-sm">Email</p>
                  <a
                    href="mailto:hello@prtech-solutions.com"
                    className="text-primary-10 hover:underline text-sm block mt-1"
                  >
                    hello@prtech-solutions.com
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
              By using PRTech Solutions, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Related Links */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/privacy-policy"
          className="flex-1 bg-white rounded-xl border border-neutral-91 p-5 hover:border-primary-10 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-30 flex items-center justify-center">
                <FiLock className="text-primary-10" />
              </div>
              <div>
                <p className="text-neutral-70 font-semibold text-sm">
                  Privacy Policy
                </p>
                <p className="text-neutral-80 text-xs mt-0.5">
                  How we handle your data
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

export default TermsAndConditionContents;
