import { PropsWithChildren } from 'react';

export function FeedbackSection({ children }: PropsWithChildren) {
  return <section className="w-full flex flex-col gap-5">{children}</section>;
}
