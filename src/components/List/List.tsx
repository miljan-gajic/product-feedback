import { PropsWithChildren } from 'react';

type ListProps = {
  listItems: string[];
};

export function List({}: ListProps) {
  return <ul></ul>;
}
