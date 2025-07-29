import { Tag } from '@/components/Tag/Tag';
import { ProductRequestStatuses } from '@/types/productRequest';
import { cn } from '@/utils/cn';

type FeedbackContentProps = {
  title: string;
  body: string;
  tag?: ProductRequestStatuses;
};

export function FeedbackContent({ title, body, tag }: FeedbackContentProps) {
  return (
    <div className={cn('flex-1')}>
      <h3 className="text-secondary-text text-lg font-semibold pb-2">
        {title}
      </h3>
      <p className="pb-2">{body}</p>
      <Tag tagContent={tag} />
    </div>
  );
}
