import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
import { FeedbackSection } from '@/components/FeedbackSection/FeedbackSection';
import { CommentStat } from '@/components/CommentStat/CommentStat';
import { List } from '@/components/List/List';
import { Logo } from '@/components/Logo/Logo';
import { Tag } from '@/components/Tag/Tag';
import { Feedback } from '@/components/Feedback/Feedback';
import { ListItem } from '@/types/list';

const dummyData: ListItem[] = [
  {
    type: 'planned',
    amount: 2,
    label: 'Planned',
  },
  {
    type: 'in-progress',
    amount: 3,
    label: 'In-Progress',
  },
  {
    type: 'live',
    amount: 1,
    label: 'Live',
  },
];

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
          <List listItems={dummyData} title="Roadmap" />
        </Card>
      </Aside>
      <FeedbackSection>
        <Card cs="bg-comment-stat w-full p-4">
          <CommentStat />
        </Card>
        <Card cs="w-full">
          <Feedback />
        </Card>
      </FeedbackSection>
    </>
  );
}
