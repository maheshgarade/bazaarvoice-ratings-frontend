import { Box } from "@mui/material";
import RatingCheckbox from "../../shared/RatingCheckbox";

// Rating data
const ratingData = [
  { ratingValue: 5, count: 20021 },
  { ratingValue: 4, count: 1383 },
  { ratingValue: 3, count: 163 },
  { ratingValue: 2, count: 27 },
  { ratingValue: 1, count: 87 },
];

// Calculate total ratings count
const totalRatings = ratingData.reduce((acc, rating) => acc + rating.count, 0);

const RatingSnapshot = () => {
  return (
    <Box>
      {ratingData.map((rating) => {
        const progress = (rating.count / totalRatings) * 100;
        return (
          <RatingCheckbox
            key={rating.ratingValue}
            ratingValue={rating.ratingValue}
            count={rating.count}
            progress={progress}
          />
        );
      })}
    </Box>
  );
};

export default RatingSnapshot;
