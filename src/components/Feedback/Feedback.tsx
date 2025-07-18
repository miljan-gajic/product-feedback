import React from 'react';
import { VoteCounter } from '../VoteCounter/VoteCounter';
import { FeedbackContent } from './FeedbackContent/FeedbackContent';
import { Comment } from '../Comment/Comment';
import { cn } from '@/utils/cn';
import { ProductRequestStatuses } from '@/types/productRequest';

type FeedbackProps = {
  title: string;
  upvotesCount: number;
  description: string;
  status: ProductRequestStatuses;
};

export function Feedback({
  title,
  upvotesCount,
  description,
  status,
}: FeedbackProps) {
  return (
    <section
      className={cn('w-full flex flex-row justify-between items-start gap-8')}
    >
      <VoteCounter upvotesCount={upvotesCount} />
      <FeedbackContent title={title} body={description} tag={status} />
      <Comment commentCount={4} />
    </section>
  );
}
