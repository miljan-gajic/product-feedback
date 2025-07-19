import Image from 'next/image';

import commentsIcon from '../../../public/icons/icon-comments.svg';

type CommentProps = {
  commentCount: number;
};

export function Comment({ commentCount }: CommentProps) {
  return (
    <div className="flex gap-3 self-center cursor-pointer">
      <Image src={commentsIcon} alt="Comment icon" width={24} height={24} />
      <span className="text-secondary-text font-bold">{commentCount}</span>
    </div>
  );
}
