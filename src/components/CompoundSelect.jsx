// CompoundSelect.jsx
import React, { createContext, useContext, useState } from 'react';

const SelectContext = createContext();

export function Select({ children }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    selected,
    setSelected,
    isOpen,
    setIsOpen,
  };

  return (
    <SelectContext.Provider value={value}>
      <div className="relative w-40">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger() {
  const { selected, isOpen, setIsOpen } = useContext(SelectContext);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className="w-full border p-2">
      {selected || 'Select an option'}
    </button>
  );
}

export function SelectList({ children }) {
  const { isOpen } = useContext(SelectContext);
  if (!isOpen) return null;

  return (
    <ul className="absolute top-full w-full border bg-white shadow">{children}</ul>
  );
}

export function SelectOption({ value, children }) {
  const { setSelected, setIsOpen } = useContext(SelectContext);

  return (
    <li
      onClick={() => {
        setSelected(value);
        setIsOpen(false);
      }}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </li>
  );
}
