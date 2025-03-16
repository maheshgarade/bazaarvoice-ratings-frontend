import { FeaturedReview } from "@/types";
import { Box, Rating, Typography } from "@mui/material";

interface FeaturedReviewProps {
  data: FeaturedReview;
}

const FeaturedReviews: React.FC<FeaturedReviewProps> = ({ data }) => {
  const { rating, userName, lastModificationTime } = data;
  return (
    <Box>
      <Typography>{"Featured review"}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Box>
          <Rating
            value={rating}
            precision={0.1}
            readOnly
            sx={{
              "& .MuiRating-iconFilled": { color: "#e8733b" },
              "& .MuiRating-iconEmpty": { color: "#e8733b" },
            }}
          />
        </Box>
        <Box>
          <span
            style={{
              marginLeft: "8px",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#00008c",
            }}
          >
            {rating}
          </span>
        </Box>
      </Box>
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
    </Box>
  );
};

export default FeaturedReviews;
