import React from 'react';
import Image from 'next/image';

import suggestionsIcon from '../../../public/icons/icon-suggestions.svg';
import plusIcon from '../../../public/icons/icon-plus.svg';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Button from '@/components/Button/Button';

export function CommentStat() {
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
      <Button variant="primary" size="md">
        <Image src={plusIcon} width={14} height={14} alt="Plus Icon" />
        <p>Add Feedback</p>
      </Button>
    </div>
  );
}
