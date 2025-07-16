export type ListItemType = 'in-progress' | 'live' | 'planned';

export type ListItem = {
  type: ListItemType;
  label: string;
  amount: number;
};
