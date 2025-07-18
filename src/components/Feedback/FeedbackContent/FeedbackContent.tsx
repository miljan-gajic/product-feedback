import { Tag } from '@/components/Tag/Tag';
import { cn } from '@/utils/cn';

type FeedbackContentProps = {
  title: string;
  body: string;
  tags?: string[];
};

export function FeedbackContent({ title, body, tags }: FeedbackContentProps) {
  return (
    <div className={cn('flex-1')}>
      <h3 className="text-secondary-text text-lg font-semibold pb-2">
        {title}
      </h3>
      <p className="pb-2">{body}</p>
      {tags?.map((tag, idx) => (
        <Tag tagContent={tag} key={idx} />
      ))}
    </div>
  );
}
