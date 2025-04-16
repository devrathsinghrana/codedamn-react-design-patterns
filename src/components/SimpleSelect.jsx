// SimpleSelect.jsx
import React, { useState } from "react";

export default function SimpleSelect({ options = [], onChange }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-40">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full border p-2">
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute top-full w-full border bg-white shadow">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
