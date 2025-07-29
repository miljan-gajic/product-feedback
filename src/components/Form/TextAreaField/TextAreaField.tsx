'use client';

import { cn } from '@/utils/cn';
import React from 'react';

interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
  error?: string;
  cs?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  description,
  error,
  cs,
  ...props
}) => {
  return (
    <div className={cn('w-full', cs)}>
      <label className="block text-sm text-secondary-text font-semibold mb-1">
        {label}
      </label>

      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      <textarea
        className={cn(
          'w-full px-4 py-3 text-sm rounded-md bg-main-bg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-secondary-text resize-none',
          error ? 'border border-red-500' : ''
        )}
        {...props}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;
