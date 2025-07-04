import { cn } from '@/utils/cn';

type TagProps = {
  tagContent: string;
  active?: boolean;
};

export function Tag({ tagContent, active }: TagProps) {
  return (
    <button
      className={cn(
        'h-[30px] w-fit px-5 py-1 rounded-xl',
        active ? 'bg-secondary' : 'bg-secondary-bg'
      )}
    >
      <p
        className={cn(
          ' text-center font-bold text-xs',
          active ? 'text-white' : 'text-secondary'
        )}
      >
        {tagContent}
      </p>
    </button>
  );
}
