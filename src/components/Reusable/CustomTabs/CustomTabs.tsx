// components/Reusable/CustomTabs/CustomTabs.tsx
import { motion } from "framer-motion";

interface CustomTabsProps {
  label?: string;
  options: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  // Optional prop in case you need a unique layoutId if rendering multiple tabs on the same page
  layoutIdPrefix?: string; 
}

const CustomTabs = ({
  label,
  options,
  activeTab,
  onChange,
  layoutIdPrefix = "tab",
}: CustomTabsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      {label && (
        <span className="font-semibold text-neutral-73 pl-1">{label}</span>
      )}
      
      <div className="flex items-center p-1.5 border border-primary-10 bg-neutral-72 rounded-full w-fit overflow-x-auto max-w-full scrollbar-hide">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 whitespace-nowrap ${
              activeTab === option
                ? "text-white"
                : "text-neutral-70 hover:text-primary-10"
            }`}
          >
            {activeTab === option && (
              <motion.div
                layoutId={`${layoutIdPrefix}-active-tab`}
                className="absolute inset-0 bg-primary-10 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;