import { ListItem } from '@/types/list'
import { ProductRequest, ProductRequestStatuses } from '@/types/productRequest'
import { capitalize } from 'lodash'

export function mapStatusesFromProduct(productReq: ProductRequest[] = []) {
  const amountPerStatus: Record<ProductRequestStatuses, number> = {
    "in-progress": productReq.filter((p) => p.status === "in-progress").length,
    "live": productReq.filter((p) => p.status === "live").length,
    "suggestion": productReq.filter((p) => p.status === "suggestion").length,
    "planned": productReq.filter((p) => p.status === "planned").length,
  };

  const uniqueStatuses: ListItem[] = Object.entries(amountPerStatus).map(
    ([status, amount]) => ({
      type: status as ProductRequestStatuses,
      amount,
      label: capitalize(status),
    })
  );

  return uniqueStatuses;
}
