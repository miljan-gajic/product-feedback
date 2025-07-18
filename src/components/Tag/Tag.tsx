import { ProductRequestStatuses } from '@/types/productRequest';
import { cn } from '@/utils/cn';

type TagProps = {
  tagContent?: ProductRequestStatuses;
  active?: boolean;
};

export function Tag({ tagContent, active }: TagProps) {
  return (
    <button
      className={cn(
        'h-[30px] w-fit px-5 py-2 rounded-xl cursor-pointer hover:bg-hover',
        active ? 'bg-secondary' : 'bg-secondary-bg'
      )}
    >
      <p
        className={cn(
          'text-center font-bold text-xs',
          active ? 'text-white' : 'text-secondary'
        )}
      >
        {tagContent}
      </p>
    </button>
  );
}
