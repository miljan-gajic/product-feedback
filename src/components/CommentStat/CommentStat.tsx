'use client';

import React from 'react';
import Image from 'next/image';

import suggestionsIcon from '../../../public/assets/icons/icon-suggestions.svg';
import plusIcon from '../../../public/assets/icons/icon-plus.svg';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

export function CommentStat() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/feedback/create');
  };

  return (
    <div className="w-full flex flex-row justify-between p-0">
      <div className="flex flex-row gap-4 items-center">
        <Image
          src={suggestionsIcon}
          width={23}
          height={24}
          alt="Light Bulb icon"
        />
        <p className="text-white font-bold text-xl">6 Suggestions</p>
        <Dropdown />
      </div>
      <Button variant="primary" size="md" onClick={handleClick}>
        <Image src={plusIcon} width={14} height={14} alt="Plus Icon" />
        Add Feedback
      </Button>
    </div>
  );
}
