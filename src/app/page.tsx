import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Device } from "../types";
import { Box } from "@mui/material";

export default async function HomePage() {
  const { data } = await axios.get("http://localhost:3003/getProducts");
  return (
    <Box sx={{ display: "flex", gap: 2, margin: "1rem" }}>
      {data.devices.map((device: Device, index: number) => (
        <ProductCard key={index} data={device} />
      ))}
    </Box>
  );
}
