import { Card } from '@/components/Card/Card';
import { ProductRequest } from '@/types/productRequest';
import React from 'react';
import { Feedback } from '@/components/FeedbackSection/Feedback/Feedback';
import { NoFeedback } from '@/components/NoFeedback/NoFeedback';
import { calculateTotalComments } from '@/utils/calculateTotalComments';

type FeedbackListProps = {
  productRequests: ProductRequest[];
};

export function FeedbackList({ productRequests }: FeedbackListProps) {
  const noProductFeedback = productRequests.length === 0;

  if (noProductFeedback) {
    return (
      <Card cs="w-full items-center justify-center">
        <NoFeedback />
      </Card>
    );
  }
  return (
    <>
      {productRequests.map(
        ({ id, description, status, upvotes, title, comments }) => (
          <Card cs="w-full" key={id} interactive>
            <Feedback
              description={description}
              status={status}
              title={title}
              upvotesCount={upvotes}
              totalComments={calculateTotalComments(comments)}
              feedbackId={id}
            />
          </Card>
        )
      )}
    </>
  );
}
