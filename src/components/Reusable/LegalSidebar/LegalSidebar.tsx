// components/Reusable/LegalSidebar/LegalSidebar.tsx
import { motion } from "framer-motion";

export interface SidebarSection {
  id: string;
  label: string;
}

interface LegalSidebarProps {
  sections: SidebarSection[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const LegalSidebar = ({
  sections,
  activeSection,
  scrollToSection,
}: LegalSidebarProps) => {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-28">
        <p className="text-xs font-bold text-neutral-50 uppercase tracking-widest mb-6">
          Table of Contents
        </p>
        <nav className="flex flex-col border-l border-neutral-91">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative flex items-center px-4 py-2.5 text-sm transition-all duration-200 text-left ${
                  isActive
                    ? "text-primary-10 font-semibold"
                    : "text-neutral-80 hover:text-neutral-20"
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="active-line"
                    className="absolute -left-px top-0 bottom-0 w-0.5 bg-primary-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default LegalSidebar;