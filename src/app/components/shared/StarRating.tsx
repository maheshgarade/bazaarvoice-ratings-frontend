import React from "react";

interface StarRatingProps {
  value: number; // Rating value between 0 and 5
}

const StarRating: React.FC<StarRatingProps> = ({ value }) => {
  const totalStars = 5; // Total number of stars
  const filledStars = Math.floor(value); // Fully filled stars
  const hasHalfStar = value % 1 !== 0; // Determines if there's a half star
  const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div style={{ display: "flex" }}>
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} style={{ color: "#e8733b" }}>
          ★
        </span>
      ))}

      {/* Render a half-filled star if applicable */}
      {hasHalfStar && (
        <span
          style={{
            color: "#e8733b",
            position: "relative",
            display: "inline-block",
          }}
        >
          <span style={{ position: "relative", color: "lightgray" }}>★</span>
          <span
            style={{
              position: "absolute",
              overflow: "hidden",
              width: "50%",
              color: "#e8733b",
              left: "0",
              top: "0",
              height: "100%",
            }}
          >
            ★
          </span>
        </span>
      )}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} style={{ color: "lightgray" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
