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
      <OverallRating />
      <FeaturedReviews />
      <ReviewWithImages />
      <ReviewList />
    </div>
  );
};

export default ProductDetails;
