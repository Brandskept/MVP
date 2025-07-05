import React from 'react';

export interface FilterDropdownProps {
  label?: string;
  options?: string[];
  onChange?: (value: string) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label = 'All',
  options = ['All'],
  onChange,
}) => {
  return (
    <select
      className="border rounded p-1 text-sm"
      onChange={(e) => onChange?.(e.target.value)}
      defaultValue={label}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
