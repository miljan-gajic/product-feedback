import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
import { FeedbackSection } from '@/components/FeedbackSection/FeedbackSection';
import { CommentStat } from '@/components/CommentStat/CommentStat';
import { List } from '@/components/List/List';
import { Logo } from '@/components/Logo/Logo';
import { Tag } from '@/components/Tag/Tag';
import { Feedback } from '@/components/Feedback/Feedback';
import { ListItem } from '@/types/list';
import { NoFeedback } from '@/components/NoFeedback/NoFeedback';

import data from '../../public/assets/data/data.json';
import {
  ApiResponse,
  ProductRequest,
  ProductRequestStatuses,
} from '@/types/productRequest';
import { api } from './api/api';
import { mapStatusesFromProduct } from '@/utils/mapStatusesFromProduct';
import { mapCategoriesFromProduct } from '@/utils/mapCategoriesFromProduct';

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

export default async function Home() {
  const data = await api<ApiResponse>('/assets/data/data.json');

  const listItems = mapStatusesFromProduct(data.productRequests);
  const listOfCategories = mapCategoriesFromProduct(data.productRequests);

  const noFeedback = data.productRequests.length === 0;

  return (
    <>
      <Aside>
        <Logo />
        <Card>
          {listOfCategories?.map((category, idx) => (
            <Tag tagContent={category as ProductRequestStatuses} key={idx} />
          ))}
        </Card>
        <Card>
          <List listItems={listItems} title="Roadmap" />
        </Card>
      </Aside>
      <FeedbackSection>
        <Card cs="bg-comment-stat w-full p-4">
          <CommentStat />
        </Card>
        {noFeedback ? (
          <Card cs="w-full items-center justify-center">
            <NoFeedback />
          </Card>
        ) : (
          data?.productRequests.map(
            ({ description, status, upvotes, title }) => (
              <Card cs="w-full">
                <Feedback
                  description={description}
                  status={status}
                  title={title}
                  upvotesCount={upvotes}
                />
              </Card>
            )
          )
        )}
      </FeedbackSection>
    </>
  );
}
