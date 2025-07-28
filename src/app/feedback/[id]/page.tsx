import { getProductFeedbackById } from '@/app/api/productFeedback';
import { SecondaryNav } from '@/components/SecondaryNav/SecondaryNav';
import { Card } from '@/components/Card/Card';
import React from 'react';
import { Feedback } from '@/components/Feedback/Feedback';
import { Comment } from '@/components/Comment/Comment';
import { calculateTotalComments } from '@/utils/calculateTotalComments';

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
      <SecondaryNav />
      <Card cs="w-full" key={id}>
        <Feedback
          description={description || ''}
          status={status || 'suggestion'}
          title={title || ''}
          upvotesCount={upvotes ?? 0}
          totalComments={totalComments}
          feedbackId={+id}
        />
      </Card>
      <Card cs="w-full mt-4">
        <h1 className="text-secondary-text text-xl font-bold mb-6">
          <span className="pr-2">{totalComments}</span>
          {totalComments && totalComments === 1 ? 'Comment' : 'Comments'}
        </h1>
        {comments?.map(({ id, content, user, replies }) => (
          <Comment
            key={id}
            content={content}
            user={user}
            replies={replies}
            totalComments={totalComments}
          />
        ))}
      </Card>
    </>
  );
}
