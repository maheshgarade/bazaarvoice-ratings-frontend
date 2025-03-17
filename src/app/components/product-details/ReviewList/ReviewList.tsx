import { Box, Divider, Typography } from "@mui/material";
import { AverageRatings, RatingSnapshot } from "../ReviewList";
import { Review as ReviewType, ReviewList as ReviewListType } from "@/types";
import Review from "../../shared/Review";
// import SecondaryRating from "../../shared/SecondaryRating";

interface ReviewListProps {
  data: ReviewListType;
}
const ReviewList: React.FC<ReviewListProps> = ({ data }) => {
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
          <AverageRatings data={data.secondaryAverageRatings} />
        </Box>
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
