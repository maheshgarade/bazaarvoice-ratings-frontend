import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { AverageRatings } from "./index";
import { Review as ReviewType, ReviewList as ReviewListType } from "@/types";
import RatingSnapshot from "./RatingSnapshot";
import Review from "@/components/shared/Review";

interface ReviewListProps {
  data: ReviewListType; // Data passed from ProductDetails
  selectedOption: string; // Current sort option
  onSortChange: (option: string) => void; // Sort change handler
  onPageChange: (page: number) => void; // Pagination change handler
}

const ReviewList: React.FC<ReviewListProps> = ({
  data,
  selectedOption,
  onSortChange,
  onPageChange,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridColumnGap: "22px",
        padding: "0 22px",
        width: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Average Ratings & Rating Snapshot */}
      <Box sx={{ gridColumn: "1 / span 3" }}>
        {/* Average Ratings */}
        <Box>
          <AverageRatings data={data.secondaryAverageRatings} />
        </Box>

        {/* Rating Snapshot */}
        <Box sx={{ marginTop: "64px" }}>
          <Typography
            sx={{
              fontFamily:
                "Frutiger LT Std 45 Light, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              marginBottom: "24px",
              color: "#00008c",
            }}
          >
            Ratings snapshot
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#00008c",
              marginBottom: "24px",
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Filter reviews by overall rating
          </Typography>
          <RatingSnapshot data={data.ratingDistributions} />
        </Box>
      </Box>

      {/* Sort by & Review List */}
      <Box sx={{ gridColumn: "5 / span 8", margin: 0 }}>
        {/* Sort by */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography sx={{ marginRight: "16px", alignSelf: "center" }}>
            Sort by:
          </Typography>
          <select
            value={selectedOption}
            onChange={(e) => onSortChange(e.target.value)}
            style={{
              minHeight: "36px",
              padding: "6px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="mostRecent">Most Recent</option>
            <option value="highestRated">Highest Rated</option>
            <option value="lowestRated">Lowest Rated</option>
          </select>
        </Box>

        {/* Review List */}
        <Box>
          {data.reviews.map((review: ReviewType, index: number) => (
            <Box key={index}>
              <Review
                rating={review.rating}
                userName={review.userName}
                lastModificationTime={review.lastModificationTime}
                originallyPostedByLabel={review.originallyPostedByLabel}
                title={review.title}
                cardText={review.cardText}
              />
              <Divider
                sx={{ margin: "48px 0" }}
                orientation="horizontal"
                flexItem
              />
            </Box>
          ))}
        </Box>

        {/* Pagination */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
        >
          <button
            onClick={() => onPageChange(1)}
            style={{
              marginRight: "8px",
              padding: "8px 16px",
              borderRadius: "4px",
            }}
          >
            Prev
          </button>
          <button
            onClick={() => onPageChange(2)}
            style={{ padding: "8px 16px", borderRadius: "4px" }}
          >
            Next
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewList;
