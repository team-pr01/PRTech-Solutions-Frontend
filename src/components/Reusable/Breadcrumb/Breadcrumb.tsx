import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  homeLabel?: string;
  homePath?: string;
  showHome?: boolean;
  variant?: "light" | "dark";
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
  homeLabel = "Home",
  homePath = "/",
  showHome = true,
  variant = "light",
  separator,
}) => {
  const isDark = variant === "dark";

  const linkClasses = isDark
    ? "text-white/60 hover:text-white transition-colors duration-200"
    : "text-neutral-73 hover:text-neutral-65 transition-colors duration-200";

  const nonLinkClasses = isDark ? "text-white/60" : "text-neutral-73";

  const activeClasses = isDark
    ? "text-primary-35 font-medium"
    : "text-primary-10 font-medium";

  const defaultSeparator = (
    <MdNavigateNext
      aria-hidden="true"
      className={`h-3.5 w-3.5 shrink-0 ${
        isDark ? "text-white/25" : "text-neutral-93"
      }`}
    />
  );

  const resolvedSeparator = separator ?? defaultSeparator;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-Manrope text-xs md:text-[13px] tracking-wide ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {showHome && (
          <li className="flex items-center">
            <Link to={homePath} className={linkClasses}>
              {homeLabel}
            </Link>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const active = item.isActive ?? isLast;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              {(showHome || index > 0) && resolvedSeparator}

              {active ? (
                <span
                  aria-current="page"
                  className={`${activeClasses} max-w-52 sm:max-w-xs md:max-w-none truncate`}
                >
                  {item.label}
                </span>
              ) : item.path ? (
                <Link to={item.path} className={linkClasses}>
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={linkClasses}
                >
                  {item.label}
                </button>
              ) : (
                <span className={nonLinkClasses}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;