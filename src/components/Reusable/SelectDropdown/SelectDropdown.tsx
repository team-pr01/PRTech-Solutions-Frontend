/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { MdKeyboardArrowDown } from "react-icons/md";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectDropdownProps {
  variant?: "light" | "dark";
  label?: string;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown = forwardRef<HTMLSelectElement, SelectDropdownProps>(
  (
    {
      variant = "dark",
      label,
      name,
      placeholder = "Select an option",
      options = [],
      error,
      defaultValue,
      isDisabled = false,
      isRequired = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2 font-Manrope w-full">
        {label && (
          <label
            htmlFor={name}
            className={`flex flex-row items-center w-full justify-between ${
              error
                ? "text-red-500"
                : variant === "light"
                  ? "text-neutral-50"
                  : "text-white"
            }`}
          >
            <span className="leading-4.5 text-[13px] md:text-[15px] font-medium tracking-[-0.16]">
              {label}{" "}
              <span className="text-primary-10">{isRequired ? "*" : ""}</span>
            </span>
          </label>
        )}
        
        <div className="relative w-full">
          <select
            id={name}
            name={name}
            defaultValue={defaultValue}
            ref={ref}
            disabled={isDisabled}
            className={`w-full px-4 py-3.5 rounded-lg border leading-4.5 focus:outline-none focus:border-primary-10 transition duration-300 appearance-none cursor-pointer ${
              isDisabled ? "cursor-not-allowed bg-white/80" : "bg-white"
            } ${
              error
                ? "border-red-500"
                : variant === "light"
                  ? "border-neutral-50/20"
                  : "border-white"
            }`}
            {...rest}
          >
            {/* Placeholder Option */}
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            
            {/* Mapped Options */}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom Dropdown Icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
            <MdKeyboardArrowDown className="text-gray-500 text-xl" />
          </div>
        </div>

        {error?.message && (
          <span className="text-red-500 text-sm mt-1">
            {String(error.message)}
          </span>
        )}
      </div>
    );
  },
);

SelectDropdown.displayName = "SelectDropdown";

export default SelectDropdown;