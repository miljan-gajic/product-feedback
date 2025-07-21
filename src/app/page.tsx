import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
import { FeedbackSection } from '@/components/FeedbackSection/FeedbackSection';
import { CommentStat } from '@/components/CommentStat/CommentStat';
import { List } from '@/components/List/List';
import { Logo } from '@/components/Logo/Logo';
import { Tag } from '@/components/Tag/Tag';
import { Feedback } from '@/components/Feedback/Feedback';
import { NoFeedback } from '@/components/NoFeedback/NoFeedback';

import { ApiResponse, ProductRequestStatuses } from '@/types/productRequest';
import { api } from './api/api';
import { mapStatusesFromProduct } from '@/utils/mapStatusesFromProduct';
import { mapCategoriesFromProduct } from '@/utils/mapCategoriesFromProduct';

export default async function Home() {
  const data = await api<ApiResponse>('/assets/data/data.json');

  const listItems = mapStatusesFromProduct(data.productRequests);
  const listOfCategories = mapCategoriesFromProduct(data.productRequests);

  if (data.productRequests.length === 0) {
    return (
      <Card cs="w-full items-center justify-center">
        <NoFeedback />
      </Card>
    );
  }

  return (
    <section className="flex flex-row gap-6">
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
        {data?.productRequests.map(
          ({ id, description, status, upvotes, title, comments }) => (
            <Card cs="w-full" key={id} interactive>
              <Feedback
                description={description}
                status={status}
                title={title}
                upvotesCount={upvotes}
                totalComments={comments?.length}
                feedbackId={id}
              />
            </Card>
          )
        )}
      </FeedbackSection>
    </section>
  );
}
