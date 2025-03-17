import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

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
        border: checked ? `2px solid #0a8a03` : `1px solid #919191`,
        borderRadius: "8px",
        padding: 1,
        marginBottom: "16px",
        height: "68px",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        sx={{
          color: checked ? "#0a8a03" : "#0050ff",
          "&.Mui-checked": {
            color: "#0a8a03",
          },
          "& .MuiSvgIcon-root": { fontSize: "32px" },
        }}
      />
      <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#00008c",
            marginBottom: "8px",
          }}
        >
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
