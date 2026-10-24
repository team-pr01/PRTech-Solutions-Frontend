import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import { FiFileText, FiMail } from "react-icons/fi";

const PrivacyPolicyFooterCTA = () => {
    return (
         <div className="border-t border-neutral-91 bg-white">
        <Container>
          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-20 mb-1">Need to review our Terms as well?</h3>
              <p className="text-neutral-80 text-sm">Read the guidelines for using our services.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/terms-and-conditions" className="flex items-center gap-2 text-sm font-medium text-neutral-20 border border-neutral-91 px-6 py-3 rounded-lg hover:border-primary-10 hover:text-primary-10 transition-colors">
                <FiFileText size={16} /> Terms & Conditions
              </Link>
              <Link to="/contact-us" className="flex items-center gap-2 text-sm font-medium text-white bg-neutral-20 px-6 py-3 rounded-lg hover:bg-neutral-30 transition-colors">
                <FiMail size={16} /> Contact Legal Team
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default PrivacyPolicyFooterCTA;