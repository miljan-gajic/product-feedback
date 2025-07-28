import { Comment } from '@/types/productRequest'

export function calculateTotalComments(comment?: Comment[]): number | undefined {
  return comment?.reduce((acc, cvalue, _, orgArr) => {
    acc += 1
    return acc += cvalue?.replies?.length || 0
  }, 0)
}
