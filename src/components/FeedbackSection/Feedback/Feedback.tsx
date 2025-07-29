'use client';

import React from 'react';
import { FeedbackContent } from './FeedbackContent/FeedbackContent';
import { cn } from '@/utils/cn';
import { ProductRequestStatuses } from '@/types/productRequest';
import { useRouter } from 'next/navigation';
import { VoteCounter } from '@/components/VoteCounter/VoteCounter';
import { CommentCount } from '@/components/Comment/CommentCount';
import { calculateTotalComments } from '@/utils/calculateTotalComments';

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
    if (!totalComments) return;
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
