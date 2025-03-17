import { Box, Typography } from "@mui/material";
import SecondaryRating from "../../shared/SecondaryRating";
import { SecondaryAverageRating } from "@/types";

interface AverageRatingsProps {
  data: SecondaryAverageRating[];
}

const AverageRatings: React.FC<AverageRatingsProps> = ({ data }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Frutiger LT Std 45 Light, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32px",
          marginBottom: "24px",
          color: "#00008c",
        }}
      >
        Average ratings
      </Typography>
      <Box>
        {data.map((rating, index) => {
          return (
            <SecondaryRating
              key={index}
              name={rating.name}
              value={rating.value}
              valueRange={rating.valueRange}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default AverageRatings;
