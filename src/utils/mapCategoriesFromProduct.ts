import { ProductRequest } from '@/types/productRequest'
import { capitalize } from 'lodash';

export function mapCategoriesFromProduct(productReq: ProductRequest[]) {
  const uniqueCategories = productReq.reduce<string[]>((acc, pr) => {
    if (!acc.includes(capitalize(pr.category))) {
      acc.push(capitalize(pr.category));
    }
    return acc;
  }, []);

  return ["All", ...uniqueCategories];
}
