import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ListItem } from './ListItem';
import { type ListItem as ListItemType } from '@/types/list';

type ListProps = {
  listItems: ListItemType[];
  title: string;
  action?: boolean;
};

export function List({ listItems, title }: ListProps) {
  return (
    <div className={cn('flex flex-col gap-4 w-full')}>
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg text-secondary-text">{title}</p>
        <Link href="#" prefetch>
          <p className="underline-offset-2 hover:underline text-secondary text-sm font-semibold">
            View
          </p>
        </Link>
      </div>
      <div>
        <ul className="space-y-2">
          {listItems.map(({ type, label, amount }, idx) => (
            <ListItem type={type} label={label} amount={amount} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}
