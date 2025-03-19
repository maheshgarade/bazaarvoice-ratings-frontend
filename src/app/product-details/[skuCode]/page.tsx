import { PhoneSection } from "@/components/product-details";
import FeaturedReviews from "@/components/product-details/FeaturedReviews";
import OverallRating from "@/components/product-details/OverallRating";
import { Typography, Divider } from "@mui/material";
import { cache } from "react";

interface ProductDetailsProps {
  params: Promise<{ skuCode: string }>;
}

// ✅ Cached fetch function for ISR
const fetchProductDetails = cache(async (skuCode: string) => {
  const [
    productResponse,
    featuredReviewsResponse,
    imageReviewsResponse,
    reviewListResponse,
  ] = await Promise.all([
    fetch(`http://localhost:3003/getProductBySku?skuCode=${skuCode}`, {
      next: { revalidate: 60 }, // ✅ ISR enabled
    }).then((res) => res.json()),
    fetch(
      `http://localhost:3003/getFeaturedReviews?skuCode=${skuCode}&page=1&limit=10`,
      { next: { revalidate: 60 } }
    ).then((res) => res.json()),
    fetch(
      `http://localhost:3003/getReviewsWithImages?skuCode=${skuCode}&page=1&limit=10`,
      { next: { revalidate: 60 } }
    ).then((res) => res.json()),
    fetch(`http://localhost:3003/getReviewList?skuCode=${skuCode}`, {
      next: { revalidate: 60 },
    }).then((res) => res.json()),
  ]);

  return {
    productData: productResponse,
    reviewData: {
      featuredReviews: featuredReviewsResponse.data[0],
      imageReviews: imageReviewsResponse.data[0]?.imageReviews,
      reviewList: reviewListResponse.data[0],
    },
  };
});

// ✅ Define `generateStaticParams` for ISR
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3003/getProducts");
  const { devices } = await res.json();

  return devices.map((device: { skuCode: string }) => ({
    skuCode: device.skuCode,
  }));
}

// ✅ Server Component for Product Details Page
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const resolvedParams = await params; // ✅ Await params
  const { skuCode } = resolvedParams; // ✅ Use resolved params

  const data = await fetchProductDetails(skuCode);

  return (
    // <div>
    //   <h1>{data.productData.name}</h1>
    //   <p>Price: {data.productData.price}</p>
    //   <p>{data.productData.description}</p>
    //   <pre>{JSON.stringify(data.reviewData, null, 2)}</pre>
    // </div>

    <div>
      <PhoneSection data={data.productData} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          height: "45rem",
          width: "100%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            padding: "24px 0",
            margin: 0,
            fontFamily:
              "Frutiger LT Std 45 Light, Helvetica, Arial, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "56px",
            color: "#00008c",
          }}
        >
          Reviews
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "38rem 36.5rem", // Set the widths of the columns
            gridColumnGap: "22px",
            padding: "0 22px",
            width: "1280px",
            margin: "0 auto",
          }}
        >
          <div style={{ width: "38rem" }}>
            <OverallRating
              data={{
                authenticImagePath: data.productData.authenticImagePath,
                totalReviewsCount: data.productData.totalReviewsCount,
                averageOverallRating: data.productData.averageOverallRating,
                overallRatingRange:
                  data.reviewData.reviewList.overallRatingRange,
                title: "Overall rating",
              }}
            />
          </div>
          <div
            style={{
              width: "36.5rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "24px",
            }}
          >
            <div style={{ flex: "1" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontFamily:
                    "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  color: "#00008c",
                }}
              >
                Featured review
              </Typography>
              <FeaturedReviews data={data.reviewData.featuredReviews} />
            </div>
            <Divider
              sx={{ margin: "48px 0" }}
              orientation="horizontal"
              flexItem
            />
            <div style={{ flex: "1" }}>
              {/* <ReviewWithImages data={reviewData.imageReviews} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <ReviewList data={reviewData.reviewList} /> */}
    </div>
  );
}
