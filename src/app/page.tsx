import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Device } from "../types";
import { Box } from "@mui/material";

export default async function HomePage() {
  const { data } = await axios.get("http://localhost:3003/getProducts");
  return (
    <Box sx={{ display: "flex", gap: 2, margin: "1rem" }}>
      {data.devices.map((review: Device, index: number) => (
        <ProductCard
          key={index}
          brand={review.brand}
          name={review.name}
          rating={review.averageOverallRating}
          reviewCount={review.totalReviewsCount}
          imageUrl={review.image}
          skuCode={review.skuCode}
        />
      ))}
    </Box>
  );
}
