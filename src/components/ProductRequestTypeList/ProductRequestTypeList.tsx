import { ListItem } from '@/types/list';
import { List } from '@/components/List/List';
import { Card } from '@/components/Card/Card';

type ProductRequestTypeListProps = {
  listItems: ListItem[];
};

export function ProductRequestTypeList({
  listItems,
}: ProductRequestTypeListProps) {
  return (
    <Card>
      <List listItems={listItems} title="Roadmap" />
    </Card>
  );
}
