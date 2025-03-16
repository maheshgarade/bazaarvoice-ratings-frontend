import { Box, Divider } from "@mui/material";
import { AverageRatings, RatingSnapshot } from "../ReviewList";
import { Review as ReviewType, ReviewList as ReviewListType } from "@/types";
import Review from "../../shared/Review";
// import SecondaryRating from "../../shared/SecondaryRating";

interface ReviewListProps {
  data: ReviewListType;
}
const ReviewList: React.FC<ReviewListProps> = ({ data }) => {
  console.log("L11 data ", data);
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
      <Box sx={{ gridColumn: "1 / span 3" }}>
        <Box>
          <AverageRatings></AverageRatings>
        </Box>
        <Box>
          <RatingSnapshot></RatingSnapshot>
        </Box>
      </Box>
      <Box sx={{ gridColumn: "5 / span 8", margin: 0 }}>
        <Box sx={{ height: "71px" }}>Sort by</Box>
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
    </Box>
  );
};

export default ReviewList;
