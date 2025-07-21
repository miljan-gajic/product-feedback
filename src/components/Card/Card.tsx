import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type CardProps = {
  cs?: string;
  interactive?: boolean;
} & PropsWithChildren;

export function Card({ children, cs, interactive }: CardProps) {
  return (
    <article
      className={cn(
        'w-fit min-w-[255px] p-6 rounded-xl bg-white flex flex-row gap-2 justify-start flex-wrap',
        interactive
          ? 'cursor-pointer hover:shadow-md hover:scale-101 transition-all'
          : '',
        cs
      )}
    >
      {children}
    </article>
  );
}
