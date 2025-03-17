import { Box, Typography } from "@mui/material";
import SecondaryRating from "../../shared/SecondaryRating";

const secondaryAverageRatings = [
  {
    name: "BatteryLife",
    value: 1,
    valueRange: 5,
  },
  {
    name: "Camera",
    value: 2,
    valueRange: 5,
  },
  {
    name: "EaseOfUse",
    value: 4,
    valueRange: 5,
  },
  {
    name: "ScreenQuality",
    value: 3,
    valueRange: 5,
  },
];

const AverageRatings = () => {
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
        {secondaryAverageRatings.map((rating, index) => {
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
