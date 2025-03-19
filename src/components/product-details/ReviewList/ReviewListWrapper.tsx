// File: src/components/product-details/ReviewList/ReviewListWrapper.tsx

"use client";

import React, { useState } from "react";
import ReviewList from "./ReviewList";
import { ReviewList as ReviewListType } from "@/types";

interface ReviewListWrapperProps {
  data: ReviewListType; // Data passed from ProductDetails
}

const ReviewListWrapper: React.FC<ReviewListWrapperProps> = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState<string>("mostRecent"); // Sorting state
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagination state

  const handleSortChange = (option: string) => {
    setSelectedOption(option);
    console.log("Sorting changed to:", option);
    // Call API to fetch new sorted data here
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Pagination changed to page:", page);
    // Call API to fetch new paginated data here
  };

  console.log("currentPage", currentPage);

  return (
    <ReviewList
      data={data}
      selectedOption={selectedOption}
      onSortChange={handleSortChange}
      onPageChange={handlePageChange}
    />
  );
};

export default ReviewListWrapper;
