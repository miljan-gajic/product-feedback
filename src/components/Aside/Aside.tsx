import { PropsWithChildren } from 'react';

export function Aside({ children }: PropsWithChildren) {
  return (
    <aside className="max-w-[255px] flex flex-col gap-7">{children}</aside>
  );
}
