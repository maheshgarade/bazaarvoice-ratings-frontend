import React from "react";
import { Box, Rating, Typography } from "@mui/material";

interface ReviewProps {
  rating: number;
  userName: string;
  originallyPostedByLabel?: string;
  lastModificationTime?: string;
  title?: string;
  cardText?: string;
}

const Review: React.FC<ReviewProps> = ({
  rating,
  userName,
  originallyPostedByLabel,
  lastModificationTime,
  title,
  cardText,
}) => {
  return (
    <Box>
      {/* Rating Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Rating
          value={rating}
          precision={0.1}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": { color: "#e8733b" },
            "& .MuiRating-iconEmpty": { color: "#e8733b" },
          }}
        />
        <Typography
          component="span"
          sx={{
            marginLeft: "8px",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#00008c",
          }}
        >
          {rating.toFixed(1)}
        </Typography>
      </Box>

      {/* User Name */}
      <Typography
        sx={{
          fontFamily: "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          color: "#00008c",
          marginTop: "24px",
        }}
      >
        {userName}
      </Typography>

      {/* Originally Posted By */}
      <Typography
        sx={{
          color: "#0050ff",
          lineHeight: "24px",
          fontFamily: "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        {originallyPostedByLabel}
      </Typography>

      {/* Last Modification Time */}
      <Typography
        sx={{
          fontFamily: "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          color: "#757575",
          padding: "8px 0 24px",
        }}
      >
        {lastModificationTime}
      </Typography>

      {/* Comments Title */}
      <Typography
        sx={{
          fontFamily: "Frutiger LT Std 65 Bold, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 600,
          color: "#00008c",
          lineHeight: "24px",
        }}
      >
        {title}
      </Typography>

      {/* Comments */}
      <Typography
        sx={{
          marginTop: "8px",
          color: "#00008c",
          wordBreak: "break-word",
          lineHeight: "24px",
          fontFamily: "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        {cardText}
      </Typography>
    </Box>
  );
};

export default Review;
