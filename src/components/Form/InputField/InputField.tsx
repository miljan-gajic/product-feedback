'use client';

import { cn } from '@/utils/cn';

type InputFieldProps = {
  label: string;
  description?: string;
  error?: string;
  cs?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputField({
  label,
  description,
  error,
  cs,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn('w-full', cs)}>
      <label className="block text-sm text-secondary-text font-semibold mb-1">
        {label}
      </label>

      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      <input
        className={cn(
          'w-full px-4 py-3 rounded-md bg-main-bg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-secondary-text',
          error ? 'border border-red-500' : ''
        )}
        {...props}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
