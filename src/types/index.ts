export interface Device {
  brand: string;
  name: string;
  ProductId: string;
  defaultOfferingCode?: string;
  skuCode: string;
  averageRating?: number;
  image: string;
  previewImage: string;
  averageOverallRating: number;
  totalReviewsCount: number;
  networkTechnology: string;
  backgroundImages: string;
  authenticImagePath: string;
}

export interface photoReview {
  rating: number;
  ratingRange: number;
  userName: string;
  lastModificationTime: string;
  cardText: string;
  secondaryRatings: SecondaryAverageRating[];
}

export interface ReviewWithPhoto {
  photo: Photo;
  review: photoReview;
}

export interface Photo {
  id: string;
  caption: string | null;
  sizes: {
    normal: string;
    thumbnail: string;
    large: string;
  };
}

export interface Review {
  rating: number;
  userName: string;
  lastModificationTime?: string;
  ratingRange: number;
  originallyPostedByLabel?: string;
  secondaryRatings: unknown[];
  photos: unknown[];
  id: number;
  title: string;
  cardText: string;
  negativeFeedbackCount: number;
  positiveFeedbackCount: number;
}

export interface Rating {
  authenticImagePath: string;
  totalReviewsCount: number;
  averageOverallRating: number;
  overallRatingRange: number;
  title: string;
}

export interface SecondaryAverageRating {
  name: string;
  value: number;
  valueRange: number;
}

export interface FeaturedReview {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  data: Review[];
}

export interface ReviewList {
  skuCode: string;
  limit: number;
  offset: number;
  totalReviewsCount: number;
  overallRatingRange: number;
  reviews: Review[];
  ratingDistributions: RatingDistribution[];
  secondaryAverageRatings: SecondaryAverageRating[];
  hasErrors: boolean;
}

export interface RatingDistribution {
  ratingValue: number;
  count: number;
}

export interface RatingCheckbox {
  ratingValue: number;
  count: number;
}
