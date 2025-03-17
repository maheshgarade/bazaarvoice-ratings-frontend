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
  const segments = 5; // Total number of bars
  const gap = 5; // Gap between bars in pixels
  const totalWidth = 292.5; // Total width of the component
  const barWidth = (totalWidth - gap * (segments - 1)) / segments; // Width of each bar

  // Calculate filled bars
  const filledSegments = Math.round((value / valueRange) * segments);

  return (
    <Box sx={{ marginBottom: 2 }}>
      {/* Label */}
      <Typography
        variant="body2"
        sx={{ fontSize: "16px", marginBottom: "16px", color: "#00008c" }}
      >
        {name}
      </Typography>

      {/* Rating Bar Container */}
      <Box sx={{ display: "flex", gap: `${gap}px` }}>
        {[...Array(segments)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: `${barWidth}px`, // Dynamic bar width
              height: "8px", // Fixed height for the bars
              backgroundColor: index < filledSegments ? "#e8733b" : "#e0e0e0", // Filled or unfilled
              borderRadius: "2px", // Rounded corners
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SecondaryRating;
