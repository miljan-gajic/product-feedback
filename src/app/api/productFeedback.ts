import { ApiResponse } from "@/types/productRequest";
import { api } from "./api";

export async function getProductFeedbackById (id: string) {
  const {productRequests} = await api<ApiResponse>('/assets/data/data.json') || [];

  return productRequests?.find(req => req.id === +id)
}
