'use client';

import Image from 'next/image';

import { cn } from '@/utils/cn';
import arrowDown from '../../../../public/assets/icons/icon-arrow-down.svg';

type DropdownProps = {
  label: string;
  options: { label: string; value: string }[];
  description?: string;
  error?: string;
  cs?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function DropdownField({
  label,
  description,
  error,
  options,
  cs,
  ...props
}: DropdownProps) {
  return (
    <div className={cn('w-full', cs)}>
      <label className="block text-sm text-secondary-text font-semibold mb-1">
        {label}
      </label>

      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      <div className="relative">
        <select
          className={cn(
            'w-full appearance-none px-4 py-3 rounded-md bg-main-bg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-secondary-text',
            error ? 'border border-red-500' : ''
          )}
          {...props}
        >
          <option value="Feature" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-secondary-text"
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <Image src={arrowDown} alt="Chevron Down" width={10} height={10} />
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
