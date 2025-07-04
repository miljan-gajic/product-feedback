import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
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
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            sunt. Aspernatur eum aliquam quos.
          </p>
        </Card>
      </Aside>
    </>
  );
}
