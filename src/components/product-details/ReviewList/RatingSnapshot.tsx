import { Box } from "@mui/material";
import { RatingDistribution } from "@/types";
import RatingCheckbox from "@/components/shared/RatingCheckbox";

interface RatingSnapshotProps {
  data: RatingDistribution[];
}

const RatingSnapshot: React.FC<RatingSnapshotProps> = ({ data }) => {
  // Calculate total ratings count
  const totalRatings = data.reduce((acc, rating) => acc + rating.count, 0);

  // Sort the data in descending order of ratingValue
  const sortedData = [...data].sort((a, b) => b.ratingValue - a.ratingValue);

  return (
    <Box>
      {sortedData.map((rating) => {
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
