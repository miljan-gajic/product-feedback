import { cn } from '@/utils/cn';
import React from 'react';

type ListItemType = 'in-progress' | 'live' | 'planned';

export type ListItemProps = {
  type: ListItemType;
  label: string;
  amount: number;
};

export function ListItem({ type, label, amount }: ListItemProps) {
  const typeColorLookup: Record<ListItemType, string> = {
    'in-progress': 'bg-primary',
    live: 'bg-accent-blue',
    planned: 'bg-accent',
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
