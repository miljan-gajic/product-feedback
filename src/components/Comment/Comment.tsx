import { Reply } from '@/types/productRequest';
import { User } from '@/types/user';
import React from 'react';
import Button from '../Button/Button';

type CommentProps = {
  content: string;
  user: User;
  id?: number;
  replies?: Reply[];
  replyingTo?: string;
  totalComments?: number;
};

export function Comment({
  content,
  user,
  replies,
  replyingTo,
  totalComments,
}: CommentProps) {
  return (
    <article className="flex flex-col space-y-4 w-full">
      <div className="flex space-x-4">
        <img
          src={user.image}
          alt={`${user.name}'s avatar`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 id={`comment-${user.username}`} className="font-bold">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">{`@${user.username}`}</p>
            </div>
            <Button
              variant="link"
              size="sm"
              aria-label={`Reply to ${user.name}`}
            >
              Reply
            </Button>
          </div>
          <p className="mt-4">
            {replyingTo && (
              <span className="text-primary mr-2 font-semibold">{`@${replyingTo}`}</span>
            )}
            {content}
          </p>
        </div>
      </div>

      {replies && replies.length > 0 && (
        <section
          aria-labelledby={`comment-${user.username}`}
          className="ml-5 pl-5 border-l-2 border-main-border-fade"
        >
          {replies.map((reply, idx) => (
            <Comment key={idx} {...reply} />
          ))}
        </section>
      )}
    </article>
  );
}
