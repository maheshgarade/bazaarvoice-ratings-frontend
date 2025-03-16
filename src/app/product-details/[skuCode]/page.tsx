"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation"; // Hook for accessing params in client components
import {
  FeaturedReviews,
  OverallRating,
  ReviewWithImages,
} from "@/app/components/product-details";
import PhoneSection from "@/app/components/product-details/PhoneSection";
import ReviewList from "@/app/components/product-details/ReviewList/ReviewList";
import { useAppContext } from "@/app/context/AppContext";
import { FeaturedReview, Review, ReviewWithPhoto } from "@/types";

interface ReviewData {
  featuredReviews: FeaturedReview;
  imageReviews: ReviewWithPhoto;
  reviewList: Review;
}

const tempOverallRatingData = {
  authenticImagePath:
    "https://econtent.o2.co.uk/documents/portlet_file_entry/20127/authentic-review.png/c5e0d8d4-015e-d4c1-e65b-05de08596922",
  totalReviewsCount: 21570,
  averageOverallRating: 4.9,
  overallRatingRange: 5,
  title: "Overall rating",
};

const ProductDetails = () => {
  const params = useParams(); // `params` is now retrieved using this hook
  const skuCode = params?.skuCode; // Safely access skuCode

  const { productData } = useAppContext(); // Use context for product details
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!skuCode) return;

    const fetchReviews = async () => {
      try {
        const [
          featuredReviewsResponse,
          imageReviewsResponse,
          reviewListResponse,
        ] = await Promise.all([
          axios.get(
            `http://localhost:3003/getFeaturedReviews?skuCode=${skuCode}&page=1&limit=10`
          ),
          axios.get(
            `http://localhost:3003/getReviewsWithImages?skuCode=${skuCode}&page=1&limit=10`
          ),
          axios.get(`http://localhost:3003/getReviewList?skuCode=${skuCode}`),
        ]);

        setReviewData({
          featuredReviews: featuredReviewsResponse.data.data[0],
          imageReviews: imageReviewsResponse.data.data[0],
          reviewList: reviewListResponse.data.data[0],
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error loading reviews.");
      }
    };

    fetchReviews();
  }, [skuCode]); // Fetch reviews whenever skuCode changes

  if (!skuCode) return <div>Error: SKU Code is missing!</div>;

  // Handle cases when product data is not available
  if (!productData) {
    return <div>Loading product details...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Handle loading state for review data
  if (!reviewData) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div>
      <PhoneSection data={productData} />
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
            gridTemplateColumns: "608px 584px", // Set the widths of the columns
            gridColumnGap: "22px",
            padding: "0 22px",
            width: "1280px",
            margin: "0 auto",
          }}
        >
          <div style={{ width: "608px" }}>
            <OverallRating data={tempOverallRatingData} />
          </div>
          <div
            style={{ width: "584px", display: "flex", flexDirection: "column" }}
          >
            <div style={{ flex: "1" }}>
              <FeaturedReviews />
            </div>
            <div style={{ flex: "1" }}>
              <ReviewWithImages />
            </div>
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
};

export default ProductDetails;
