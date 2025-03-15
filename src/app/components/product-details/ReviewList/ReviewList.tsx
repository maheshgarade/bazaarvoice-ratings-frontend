import { Box } from "@mui/material";
import AverageRatings from "./AverageRatings";
import RatingSnapshot from "./RatingSnapshot";

const ReviewList = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
      ReviewList Component
      <AverageRatings />
      <RatingSnapshot />
    </Box>
  );
};

export default ReviewList;
