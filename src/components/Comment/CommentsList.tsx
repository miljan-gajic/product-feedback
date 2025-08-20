import { type Comment as CommentType } from '@/types/productRequest';
import { Comment } from './Comment';
import { Fragment } from 'react';

type CommentsListProps = {
  comments?: CommentType[];
  totalComments?: number;
};

export function CommentsList({ comments, totalComments }: CommentsListProps) {
  return (
    <>
      {comments?.map(({ id, content, user, replies }) => (
        <Fragment key={id}>
          <Comment
            content={content}
            user={user}
            replies={replies}
            totalComments={totalComments}
          />
          <div className="w-full border-t border-main-border-fade mx-4 my-6 last:border-0"></div>
        </Fragment>
      ))}
    </>
  );
}
