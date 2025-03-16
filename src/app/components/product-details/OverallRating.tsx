import React from "react";
import { Rating as RatingType } from "@/types";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Image from "next/image";

interface OverallRatingProps {
  data: RatingType;
}

const OverallRating: React.FC<OverallRatingProps> = ({ data }) => {
  const {
    authenticImagePath,
    totalReviewsCount,
    averageOverallRating,
    overallRatingRange,
    title,
  } = data;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "center",
        color: "#00008c",
      }}
    >
      {/* Title */}
      <p style={{ fontSize: "24px", lineHeight: "32px", marginTop: "24px" }}>
        {title || "Overall rating"}
      </p>

      {/* Rating Value */}
      <p style={{ marginTop: "24px" }}>
        <strong
          className="ratings__value-actual"
          style={{ fontSize: "80px", lineHeight: "60px" }}
        >
          {averageOverallRating}
        </strong>{" "}
        <span
          className="ratings__value-max"
          style={{
            fontSize: "40px",
            lineHeight: "32px",
            fontFamily:
              "'Frutiger LT Std 45 Light', Helvetica, Arial, sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          /{overallRatingRange}
        </span>
      </p>

      {/* MUI Rating and Reviews */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="16px"
      >
        <Rating
          name="half-rating"
          value={averageOverallRating}
          precision={0.1}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": { color: "#e8733b" },
            "& .MuiRating-iconEmpty": { color: "#e8733b" },
          }}
        />
        <span style={{ marginLeft: "16px", fontSize: "16px" }}>
          {totalReviewsCount} Reviews
        </span>
      </Box>

      {/* Authentic Review Image */}
      {authenticImagePath && (
        <Image
          src={authenticImagePath}
          alt="Authentic review"
          width={100} // Update this value based on required width
          height={32} // Height as per your requirement
          style={{ marginTop: "16px" }}
          unoptimized
        />
      )}
    </Box>
  );
};

export default OverallRating;
