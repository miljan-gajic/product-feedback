import { getProductFeedbackById } from '@/app/api/productFeedback';
import { SecondaryNav } from '@/components/SecondaryNav/SecondaryNav';
import { Card } from '@/components/Card/Card';
import React from 'react';
import { Feedback } from '@/components/Feedback/Feedback';
import { Comment } from '@/components/Comment/Comment';

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { description, status, title, upvotes, comments } =
    (await getProductFeedbackById(id)) || {};

  return (
    <>
      <SecondaryNav />
      <Card cs="w-full" key={id}>
        <Feedback
          description={description || ''}
          status={status || 'suggestion'}
          title={title || ''}
          upvotesCount={upvotes ?? 0}
          totalComments={comments?.length}
          feedbackId={+id}
        />
      </Card>
      <Card cs="w-full mt-4">
        {comments?.map(({ id, content, user, replies }) => (
          <Comment key={id} content={content} user={user} replies={replies} />
        ))}
      </Card>
    </>
  );
}
