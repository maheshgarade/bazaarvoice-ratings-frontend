import { Review as FeatureReview } from "@/types";
import Review from "../shared/Review";

interface FeaturedReviewProps {
  data: FeatureReview;
}

const FeaturedReviews: React.FC<FeaturedReviewProps> = ({ data }) => {
  const { rating, userName, lastModificationTime } = data;
  return (
    <Review
      rating={rating}
      userName={userName}
      lastModificationTime={lastModificationTime}
    />
  );
};

export default FeaturedReviews;
