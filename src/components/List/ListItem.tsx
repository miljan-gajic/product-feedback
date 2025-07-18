import { cn } from '@/utils/cn';
import React from 'react';
import { type ListItem } from '@/types/list';
import { ProductRequestStatuses } from '@/types/productRequest';

export function ListItem({ type, label, amount }: ListItem) {
  const typeColorLookup: Record<ProductRequestStatuses, string> = {
    'in-progress': 'bg-primary',
    live: 'bg-accent-blue',
    planned: 'bg-accent',
    suggestion: 'bg-secondary',
  };
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={cn(
            'w-2.5 h-2.5 rounded-full mr-2',
            `${typeColorLookup[type]}`
          )}
        ></div>
        <span className="text-base">{label}</span>
      </div>
      <span className="font-bold text-base">{amount}</span>
    </li>
  );
}
