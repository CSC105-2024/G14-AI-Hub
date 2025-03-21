import React from "react";

const RoleSelection = ({ role, name, value, onClick, selectedRole }) => {
  return (
    <button
      className={`p-3 border-1 lg:w-47 w-37 rounded-2xl cursor-pointer mb-2
            ${
              selectedRole === value
                ? "bg-[var(--primary-color)] text-white border-[var(--primary-color)] "
                : "hover:border-[var(--primary-color)]  border-gray-300"
            } 
            transition-colors duration-300`}
      onClick={onClick}
      name={name}
      value={value}
    >
      {role}
    </button>
  );
};

export default RoleSelection;
