import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ListItem, ListItemProps } from './ListItem';

const dummyData: ListItemProps[] = [
  {
    type: 'planned',
    amount: 2,
    label: 'Planned',
  },
  {
    type: 'in-progress',
    amount: 3,
    label: 'In-Progress',
  },
  {
    type: 'live',
    amount: 1,
    label: 'Live',
  },
];

type ListProps = {
  listItems: string[];
  title: string;
  action?: boolean;
};

export function List({}: ListProps) {
  return (
    <div className={cn('flex flex-col gap-4 w-full')}>
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg text-secondary-text">Roadmap</p>
        <Link href="#" prefetch>
          <p className="underline-offset-2 hover:underline text-secondary text-sm font-semibold">
            View
          </p>
        </Link>
      </div>
      <div>
        <ul className="space-y-2">
          {dummyData.map(({ type, label, amount }, idx) => (
            <ListItem type={type} label={label} amount={amount} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}
