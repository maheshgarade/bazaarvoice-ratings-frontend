import axios from "axios";
import { ReviewWithPhoto } from "@/types";

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

    console.log("L32", imageReviews);
    console.log("L33", reviewList);

    if (!reviewList) {
      return <div>Reviews not found</div>;
    }

    return (
      <div>
        <h1>Reviews</h1>
        <br />
        <hr />
        <br />
        <div>
          <h2>Featured Review</h2>
          <div>{featuredReviews.rating}</div>
          <div>{featuredReviews.userName}</div>
          <div>{featuredReviews.lastModificationTime}</div>
        </div>

        <br />
        <hr />
        <br />
        <div>
          <h2>Review with Images</h2>
          {imageReviews.imageReviews.map(
            (imageReview: ReviewWithPhoto, index: number) => {
              return <div key={index}>{index + 1}</div>;
            }
          )}
        </div>
        <br />
        <hr />
        <br />
        <div>
          <h2>List of Reviews</h2>
        </div>
        <br />
        <hr />
        <br />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading product details</div>;
  }
}
