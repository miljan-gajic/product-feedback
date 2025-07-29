import { ProductRequestStatuses } from '@/types/productRequest';
import { Card } from '@/components/Card/Card';
import { Tag } from '@/components/Tag/Tag';

type CategoryListProps = {
  listOfCategories: ProductRequestStatuses[];
};

export function CategoryList({ listOfCategories }: CategoryListProps) {
  return (
    <Card>
      {listOfCategories?.map((category, idx) => (
        <Tag tagContent={category} key={idx} />
      ))}
    </Card>
  );
}
