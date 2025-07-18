import React from 'react';
import { VoteCounter } from '../VoteCounter/VoteCounter';
import { FeedbackContent } from './FeedbackContent/FeedbackContent';
import { Comment } from '../Comment/Comment';
import { cn } from '@/utils/cn';

export function Feedback() {
  return (
    <section
      className={cn('w-full flex flex-row justify-between items-start gap-8')}
    >
      <VoteCounter count={99} />
      <FeedbackContent
        title="Add tags for solutions"
        body="Easier to search for solutions based on specific task."
        tags={['Enhancement']}
      />
      <Comment commentCount={4} />
    </section>
  );
}
