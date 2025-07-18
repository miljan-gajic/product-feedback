import Image from 'next/image';

import { cn } from '@/utils/cn';
import Button from '@/components/Button/Button';

import emptyIllustraction from '../../../public/icons/illustration-empty.svg';
import plusIcon from '../../../public/icons/icon-plus.svg';

export function NoFeedback() {
  return (
    <section
      className={cn('flex flex-col items-center justify-center gap-12 py-18')}
    >
      <Image
        src={emptyIllustraction}
        alt="Chevron Up"
        width={130}
        height={140}
      />
      <div className="flex items-center justify-center flex-col gap-4">
        <h3 className="text-secondary-text text-2xl font-bold pb-2">
          Thre is no feedback yet
        </h3>
        <p className="w-md text-center">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <Button variant="primary" size="sm">
        <Image src={plusIcon} width={8} height={8} alt="Plus Icon" />
        <p>Add Feedback</p>
      </Button>
    </section>
  );
}
