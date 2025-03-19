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
    <div>
      <h1>{data.productData.name}</h1>
      <p>Price: {data.productData.price}</p>
      <p>{data.productData.description}</p>
      <pre>{JSON.stringify(data.reviewData, null, 2)}</pre>
    </div>
  );
}
