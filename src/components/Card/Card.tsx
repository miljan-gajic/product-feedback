import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type CardProps = {
  cs?: string;
} & PropsWithChildren;

export function Card({ children, cs }: CardProps) {
  return (
    <article
      className={cn(
        'w-fit min-w-[255px] p-6 rounded-xl bg-white flex flex-row gap-2 justify-start flex-wrap',
        cs
      )}
    >
      {children}
    </article>
  );
}
