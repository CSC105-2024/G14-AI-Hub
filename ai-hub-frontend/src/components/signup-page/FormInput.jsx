import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormInput = ({
  title,
  type,
  name,
  placeholder,
  toggleIcon,
  onToggle,
  ...res
}) => {
  return (
    <>
      <div className="lg:w-100 w-80">
        <label htmlFor="" className="font-bold">
          {title}
          <span className="text-red-600">*</span>
        </label>
        <div className="border-1 border-gray-300 rounded-lg flex justify-between px-4 py-2 mb-2 items-center hover:border-[var(--primary-color)]">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            className="flex-grow outline-none"
            {...res}
          />
          {toggleIcon && (
            <FontAwesomeIcon
              icon={toggleIcon}
              className="cursor-pointer text-gray-500 hover:text-[var(--primary-color)]"
              onClick={onToggle}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FormInput;
