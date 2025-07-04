import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <article className="w-fit min-w-[255px] max-w-[255px] p-6 rounded-lg bg-white flex flex-row gap-2 justify-start flex-wrap">
      {children}
    </article>
  );
}
