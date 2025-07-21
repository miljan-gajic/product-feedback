import { Reply } from '@/types/productRequest';
import { User } from '@/types/user';
import { cn } from '@/utils/cn';
import React from 'react';

type CommentProps = {
  content: string;
  user: User;
  id?: number;
  replies?: Reply[];
};

export function Comment({ content, user }: CommentProps) {
  return (
    <article className={cn('border-b border-b-main-border w-full')}>
      Comment
    </article>
  );
}
