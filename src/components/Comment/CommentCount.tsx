import Image from 'next/image';

import commentsIcon from '../../../public/assets/icons/icon-comments.svg';

type CommentCountProps = {
  commentCount: number;
};

export function CommentCount({ commentCount }: CommentCountProps) {
  return (
    <div className="flex gap-3 self-center cursor-pointer">
      <Image src={commentsIcon} alt="Comment icon" width={24} height={24} />
      <span className="text-secondary-text font-bold">{commentCount}</span>
    </div>
  );
}
