import Modal from "../../Reusable/Modal/Modal";
import StrategicConsultForm from "./StrategicConsultForm/StrategicConsultForm";
import AITrustPanel from "./TrustPanel/AITrustPanel";
import TrustPanel from "./TrustPanel/TrustPanel";
type TStrategicConsultModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showServiceContext?: boolean;
  preselectedService?: string;
  isAiService?: boolean;
};
const StrategicConsultModal: React.FC<TStrategicConsultModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  showServiceContext = true,
  preselectedService,
  isAiService=false
}) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      width="w-full lg:w-[90%] xl:w-[84%] 2xl:w-[65%]"
      classNames="p-0 bg-none rounded-3xl overflow-hidden shadow-2xl max-h-[74vh]"
      iconColor="text-neutral-70"
    >
      <div className="relative flex h-full flex-col md:flex-row overflow-y-auto bg-gradient-start-project font-Manrope backdrop-blur-[45px]">
        {/* Left Side */}
        {isAiService ? <AITrustPanel /> : <TrustPanel />}

        {/* Right Side */}
        <StrategicConsultForm
          showServiceContext={showServiceContext}
          preselectedService={preselectedService}
        />
      </div>
    </Modal>
  );
};

export default StrategicConsultModal;
