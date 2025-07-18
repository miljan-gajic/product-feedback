import Image from 'next/image';

import { cn } from '@/utils/cn';
import arrowUp from '../../../public/icons/icon-arrow-up.svg';

type VoteCounterProps = {
  count: number;
  active?: boolean;
};

export function VoteCounter({ count, active }: VoteCounterProps) {
  return (
    <button
      className={cn(
        'w-fit px-4 py-3 rounded-[10px] cursor-pointer hover:bg-hover text-center',
        active ? 'bg-secondary' : 'bg-secondary-bg'
      )}
    >
      <Image
        src={arrowUp}
        alt="Chevron Up"
        width={14}
        height={14}
        className="text-white"
      />
      <p
        className={cn(
          'font-bold text-[13px] mt-2',
          active ? 'text-white' : 'text-secondary-text'
        )}
      >
        {count}
      </p>
    </button>
  );
}
