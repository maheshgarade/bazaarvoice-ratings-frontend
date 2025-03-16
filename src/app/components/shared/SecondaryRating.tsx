import React from "react";
import { Box, Typography } from "@mui/material";

interface SecondaryRatingProps {
  name: string;
  value: number;
  valueRange: number;
}

const SecondaryRating: React.FC<SecondaryRatingProps> = ({
  name,
  value,
  valueRange,
}) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      {/* Label */}
      <Typography variant="body2" sx={{ marginBottom: 1, fontWeight: 500 }}>
        {name}
      </Typography>

      {/* Rating Bar Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "8px",
          backgroundColor: "#e0e0e0",
          borderRadius: "4px",
          overflow: "hidden",
          width: "100%", // Fills the available space
        }}
      >
        {/* Filled Portion */}
        <Box
          sx={{
            backgroundColor: "#e8733b",
            height: "100%",
            width: `${(value / valueRange) * 100}%`, // Calculates the percentage of the bar filled
            transition: "width 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};

export default SecondaryRating;
