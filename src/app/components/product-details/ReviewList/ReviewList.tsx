import { Box } from "@mui/material";
import { AverageRatings, RatingSnapshot } from "../ReviewList";

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
