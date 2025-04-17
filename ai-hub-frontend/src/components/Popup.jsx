// @/components/Popup.jsx
import React from "react";
import { IoIosClose } from "react-icons/io";

function Popup({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <p className="mb-4 text-lg">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-[var(--primary-color)] text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
          <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
