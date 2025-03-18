import { Box, Divider, SelectChangeEvent, Typography } from "@mui/material";
import { AverageRatings, RatingSnapshot } from "../ReviewList";
import { Review as ReviewType, ReviewList as ReviewListType } from "@/types";
import SortByDropdown from "@/components/shared/SortByDropdown";
import PaginationComponent from "@/components/shared/PaginationComponent";
import { useState } from "react";
import Review from "@/components/shared/Review";
// import SecondaryRating from "../../shared/SecondaryRating";

interface ReviewListProps {
  data: ReviewListType;
}
const ReviewList: React.FC<ReviewListProps> = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("mostRecent");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value as string); // Update the selected option
    console.log("Selected Option:", event.target.value);
  };

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
          <RatingSnapshot data={data.ratingDistributions}></RatingSnapshot>
        </Box>
      </Box>

      {/* Sort by & Review List */}
      <Box sx={{ gridColumn: "5 / span 8", margin: 0 }}>
        {/* Sort by     */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ minHeight: "71px", width: "284px" }}>
            <SortByDropdown
              selectedOption={selectedOption}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box>
          {/* Review List     */}
          {data.reviews.map((review: ReviewType, index: number) => {
            return (
              <Box key={index} sx={{}}>
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
            );
          })}
        </Box>
        <PaginationComponent
          currentPage={"1-10"}
          totalItems={21695}
          itemsPerPage={10}
          onPageChange={() => {}}
        />
      </Box>
    </Box>
  );
};

export default ReviewList;
