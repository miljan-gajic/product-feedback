import { User } from "./user";

export type ProductRequestStatuses = "suggestion" | "planned" | "in-progress" | "live"
export type ProductRequestCategory = "feature" | "enhancement" | "bug" | "UI" | "UX"

export type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};

export type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};

export type ProductRequest = {
  id: number;
  title: string;
  category: ProductRequestCategory;
  upvotes: number;
  status: ProductRequestStatuses;
  description: string;
  comments?: Comment[];
};

export type ApiResponse = {
  currentUser: User;
  productRequests: ProductRequest[];
};
