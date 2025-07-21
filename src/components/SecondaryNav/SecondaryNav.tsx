'use client';

import Image from 'next/image';
import { cn } from '@/utils/cn';

import arrowLeftIcon from '../../../public/assets/icons/icon-arrow-left.svg';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

export function SecondaryNav() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className={cn('flex justify-between items-center w-full h-fit mb-4')}>
      <div
        tabIndex={0}
        role="link"
        aria-label="Go back"
        className={cn(
          'flex gap-4 items-center focus:outline-secondary-hover hover:cursor-pointer'
        )}
        onClick={handleGoBack}
      >
        <Image
          src={arrowLeftIcon}
          alt="Back Arrow"
          width={15}
          height={15}
          className="w-[10px] h-[10px]"
        />
        <p className="font-semibold">Go Back</p>
      </div>
      <Button variant="secondary" size="md">
        Edit Feedback
      </Button>
    </nav>
  );
}
