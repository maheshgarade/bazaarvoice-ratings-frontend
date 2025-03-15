import axios from "axios";
import {
  FeaturedReviews,
  OverallRating,
  ReviewWithImages,
} from "@/app/components/product-details";
import PhoneSection from "@/app/components/product-details/PhoneSection";
import ReviewList from "@/app/components/product-details/ReviewList/ReviewList";

const tempData = {
  brand: "Samsung",
  name: "Galaxy S25 Ultra 5G",
  skuCode: "1SAP312LUN",
  image:
    "https://econtent.o2.co.uk/o/econtent/media/get/3b2f8561-0e63-482a-82ca-44d98b894306",
  averageOverallRating: 4.9,
  totalReviewsCount: 21558,
  networkTechnology: "5G SA",
  backgroundImages:
    "https://econtent.o2.co.uk/documents/portlet_file_entry/20127/PA3-large-360-custom-sku-header271224.jpg/dd712e07-1223-4227-45c5-35cdd8a1a827",
};

export default async function ProductDetails({
  params,
}: {
  params: { skuCode: string };
}) {
  const { skuCode } = params;

  console.log("************ Fetching data for SKU:", skuCode);

  try {
    const [featuredReviewsResponse, imageReviewsResponse, reviewListResponse] =
      await Promise.all([
        axios.get(
          `http://localhost:3003/getFeaturedReviews?skuCode=${skuCode}&page=1&limit=10`
        ),
        axios.get(
          `http://localhost:3003/getReviewsWithImages?skuCode=${skuCode}&page=1&limit=10`
        ),
        axios.get(`http://localhost:3003/getReviewList?skuCode=${skuCode}`),
      ]);

    const featuredReviews = featuredReviewsResponse.data.data[0];
    const imageReviews = imageReviewsResponse.data.data[0];
    const reviewList = reviewListResponse.data.data[0];

    console.log("L35", featuredReviews);
    console.log("L36", imageReviews);
    console.log("L37", reviewList);

    if (!reviewList) {
      return <div>Reviews not found</div>;
    }

    return (
      <div>
        <PhoneSection data={tempData} />
        <OverallRating />
        <FeaturedReviews />
        <ReviewWithImages />
        <ReviewList />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading product details</div>;
  }
}
