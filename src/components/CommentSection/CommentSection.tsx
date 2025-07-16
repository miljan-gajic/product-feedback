import { PropsWithChildren } from 'react';

export function CommentSection({ children }: PropsWithChildren) {
  return <section className="w-full flex flex-col gap-7">{children}</section>;
}
