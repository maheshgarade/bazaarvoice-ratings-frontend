import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { green, blue } from "@mui/material/colors";

// Reusable RatingCheckbox Component
interface RatingCheckboxProps {
  defaultChecked?: boolean; // Optional prop for initial checkbox state
  ratingValue: number; // The rating value (e.g., stars)
  count: number; // The count of ratings
  progress: number; // Progress bar percentage
}

const RatingCheckbox: React.FC<RatingCheckboxProps> = ({
  defaultChecked = false,
  ratingValue,
  count,
  progress,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: checked ? `2px solid ${green[500]}` : `1px solid ${blue[500]}`,
        borderRadius: 1,
        padding: 1,
        marginBottom: 2,
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        sx={{
          color: checked ? green[500] : blue[500],
          "&.Mui-checked": {
            color: green[500],
          },
        }}
      />
      <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box component="span">{ratingValue} Star</Box>
          <Box component="span">{count}</Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 1,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#e8733b",
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default RatingCheckbox;
