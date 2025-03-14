"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface MobileCardProps {
  brand: string;
  name: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  skuCode: string;
}

const ProductCard: React.FC<MobileCardProps> = ({
  brand,
  name,
  rating,
  imageUrl,
  skuCode,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-details/${skuCode}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        marginBottom: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #00008c, #002ac9 30%, #0049f3 65%, #2166fa 85%, #96c3ff)",
          height: "40%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={`${name} image`}
        sx={{ zIndex: 2, position: "relative" }}
      />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 14,
          textTransform: "uppercase",
          fontWeight: 800,
          color: "#4949a7",
        }}
      >
        {brand}
      </Typography>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography sx={{ fontSize: "24px", color: "#00008C" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Rating value={rating} readOnly />
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            border: "1px solid #00008c",
            background: "#fff",
            minWidth: "96px",
            borderRadius: "8px",
            color: "#00008c",
            fontWeight: 600,
            marginTop: "1.2rem",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          5G SA
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
