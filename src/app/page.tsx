import { Aside } from '@/components/Aside/Aside';
import { Card } from '@/components/Card/Card';
import { FeedbackSection } from '@/components/FeedbackSection/FeedbackSection';
import { CommentStat } from '@/components/CommentStat/CommentStat';
import { Logo } from '@/components/Logo/Logo';

import { ApiResponse } from '@/types/productRequest';
import { api } from './api/api';
import { mapStatusesFromProduct } from '@/utils/mapStatusesFromProduct';
import { mapCategoriesFromProduct } from '@/utils/mapCategoriesFromProduct';
import { FeedbackList } from '@/components/FeedbackSection/Feedback/FeedbackList/FeedbackList';
import { CategoryList } from '@/components/CategoryList/CategoryList';
import { ProductRequestTypeList } from '@/components/ProductRequestTypeList/ProductRequestTypeList';

export default async function Home() {
  const data = await api<ApiResponse>('/assets/data/data.json');

  const listItems = mapStatusesFromProduct(data.productRequests);
  const listOfCategories = mapCategoriesFromProduct(data.productRequests);

  const numberOfSuggestions = data.productRequests.filter(
    (p) => p.status === ('suggestion' as unknown)
  )?.length;

  return (
    <section className="flex flex-row gap-6">
      <Aside>
        <Logo />
        <CategoryList listOfCategories={listOfCategories} />
        <ProductRequestTypeList listItems={listItems} />
      </Aside>
      <FeedbackSection>
        <Card cs="bg-comment-stat w-full p-4">
          <CommentStat numberOfSuggestions={numberOfSuggestions} />
        </Card>
        <FeedbackList productRequests={data?.productRequests} />
      </FeedbackSection>
    </section>
  );
}
