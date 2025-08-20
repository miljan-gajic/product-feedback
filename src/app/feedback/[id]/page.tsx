import { getProductFeedbackById } from '@/app/api/productFeedback';
import { SecondaryNav } from '@/components/SecondaryNav/SecondaryNav';
import { Card } from '@/components/Card/Card';
import React, { Fragment } from 'react';
import { Feedback } from '@/components/FeedbackSection/Feedback/Feedback';
import { Comment } from '@/components/Comment/Comment';
import { calculateTotalComments } from '@/utils/calculateTotalComments';
import { ProductRequestStatuses } from '@/types/productRequest';
import { CommentsList } from '@/components/Comment/CommentsList';

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { description, status, title, upvotes, comments } =
    (await getProductFeedbackById(id)) || {};

  const totalComments = calculateTotalComments(comments);
  return (
    <>
      <SecondaryNav requestId={id} />
      <Card cs="w-full" key={id}>
        <Feedback
          description={description || ''}
          status={status as ProductRequestStatuses}
          title={title || ''}
          upvotesCount={upvotes ?? 0}
          totalComments={totalComments}
          feedbackId={+id}
        />
      </Card>
      <Card cs="w-full mt-4 pt-8 pb-10">
        <h1 className="text-secondary-text text-xl font-bold mb-6">
          <span className="pr-2">{totalComments}</span>
          {totalComments && totalComments === 1 ? 'Comment' : 'Comments'}
        </h1>
        <CommentsList comments={comments} totalComments={totalComments} />
      </Card>
    </>
  );
}
