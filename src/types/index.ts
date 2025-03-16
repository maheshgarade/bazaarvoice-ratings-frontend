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

export interface Review {
  brand: string;
  name: string;
  image: string;
  averageOverallRating: number;
  totalReviewsCount: number;
  featuredReview: FeaturedReview[];
  imageReviews: ReviewWithPhoto;
  overallRatingRange: number;
}

export interface ReviewWithPhoto {
  photo: Photo;
  review: Review;
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

export interface FeaturedReview {
  rating: number;
  userName: string;
  lastModificationTime: string;
  ratingRange: number;
  originallyPostedByLabel: string;
  secondaryRatings: unknown[];
  photos: unknown[];
  id: number;
  title?: string;
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
