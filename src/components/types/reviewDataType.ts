// export type Review = {
//   id: string;
//   name: string;
//   star: number;
//   content: string;
//   created_at: string;
//   updated_at: string;
// };

// export type ReviewResponse = {
//   success: boolean;
//   data: Review[];
// };


export interface Review {
  id: number;
  author_name: string;
  profile_photo_url: string | null;
  rating: number;
  text: string;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedReviews {
  current_page: number;
  data: Review[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface ReviewsResponse {
  success: boolean;
  data: PaginatedReviews;
}
