import { ProductRequestStatuses } from "./productRequest";

export type ListItem = {
  type: ProductRequestStatuses;
  label: string;
  amount: number;
};
