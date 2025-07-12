import { cn } from '@/utils/cn';

type ListProps = {
  listItems: string[];
  title: string;
  action?: boolean;
};

export function List({}: ListProps) {
  return <div className={cn('flex flex-col gap-4')}></div>;
}
