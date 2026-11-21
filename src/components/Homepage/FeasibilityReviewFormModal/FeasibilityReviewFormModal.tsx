import Modal from "../../Reusable/Modal/Modal";
import FeasibilityReviewForm from "./FeasibilityReviewForm/FeasibilityReviewForm";
import TrustAndSocialProof from "./TrustAndSocialProof/TrustAndSocialProof";

type TFeasibilityReviewFormModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showServiceContext?: boolean;
  preselectedService?: string;
};
const FeasibilityReviewFormModal: React.FC<
  TFeasibilityReviewFormModalProps
> = ({
  isModalOpen,
  setIsModalOpen,
  showServiceContext = true,
  preselectedService,
}) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      width="w-[100%] lg:w-[90%] 2xl:w-[60%]"
      classNames="p-0 bg-none"
      iconColor="text-neutral-30"
    >
      <div className="relative bg-gradient-start-project backdrop-blur-[45px] font-Manrope flex flex-col md:flex-row h-full max-h-full md:max-h-[95vh] overflow-y-auto">
        {/* Left Side */}
        <TrustAndSocialProof />

        {/* Right Side */}
        <FeasibilityReviewForm
          showServiceContext={showServiceContext}
          preselectedService={preselectedService}
        />
      </div>
    </Modal>
  );
};

export default FeasibilityReviewFormModal;
