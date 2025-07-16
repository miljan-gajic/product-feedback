import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
import { List } from '@/components/List/List';
import { Logo } from '@/components/Logo/Logo';
import { Tag } from '@/components/Tag/Tag';

export default function Home() {
  return (
    <>
      <Aside>
        <Logo />
        <Card>
          <Tag tagContent="All" active />
          <Tag tagContent="UI" />
          <Tag tagContent="UX" />
          <Tag tagContent="Enhancement" />
          <Tag tagContent="Bug" />
          <Tag tagContent="Feature" />
        </Card>
        <Card>
          <List listItems={[]} title="" />
        </Card>
      </Aside>
    </>
  );
}
