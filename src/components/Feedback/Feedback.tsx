'use client';

import React from 'react';
import { VoteCounter } from '../VoteCounter/VoteCounter';
import { FeedbackContent } from './FeedbackContent/FeedbackContent';
import { CommentCount } from '../Comment/CommentCount';
import { cn } from '@/utils/cn';
import { ProductRequestStatuses } from '@/types/productRequest';
import { useRouter } from 'next/navigation';

type FeedbackProps = {
  title: string;
  upvotesCount: number;
  description: string;
  status: ProductRequestStatuses;
  totalComments?: number;
  feedbackId?: number;
};

export function Feedback({
  title,
  upvotesCount,
  description,
  status,
  totalComments,
  feedbackId,
}: FeedbackProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/feedback/${feedbackId}`);
  };
  return (
    <article
      className={cn(
        'w-full flex flex-row justify-between items-start gap-8',
        'focus:outline-main-text'
      )}
      onClick={handleClick}
      tabIndex={0}
      aria-labelledby={title}
      aria-describedby={description}
      role="link"
    >
      <VoteCounter upvotesCount={upvotesCount} />
      <FeedbackContent title={title} body={description} tag={status} />
      {totalComments && <CommentCount commentCount={totalComments} />}
    </article>
  );
}
