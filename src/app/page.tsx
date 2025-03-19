import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Device } from "@/types";

export default async function HomePage() {
  const res = await fetch("http://localhost:3003/getProducts", {
    next: { revalidate: 86400 }, // Revalidate data every 24 hours seconds
  });
  const { devices } = await res.json();

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {devices.map((device: Device, index: number) => (
        <ProductCard key={index} data={device} />
      ))}
    </div>
  );
}
