import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";

interface PhoneSectionProps {
  data: {
    brand: string;
    name: string;
    skuCode: string;
    image: string;
    averageOverallRating: number;
    totalReviewsCount: number;
    networkTechnology: string;
    backgroundImages: string;
  };
}

const PhoneSection: React.FC<PhoneSectionProps> = ({ data }) => {
  const {
    brand,
    name,
    skuCode,
    image,
    averageOverallRating,
    totalReviewsCount,
    networkTechnology,
    backgroundImages,
  } = data;
  console.log("PhoneSection skuCode", skuCode);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          height: "250px",
          width: "100%",
          backgroundImage: `url(${backgroundImages})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          height: "250px",
          width: "100%",
          background: "#f8f8f8",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {/* Phone Image on the Left */}
          <div
            style={{
              marginRight: "25rem",
            }}
          >
            <Image
              src={image}
              alt={`${brand} ${name}`}
              width={460}
              height={460}
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          {/* Text and Review Details on the Right */}
          <div
            style={{
              flex: "1",
              color: "white",
              padding: "20px",
              marginLeft: "auto",
              textAlign: "left",
              position: "absolute",
              right: "10%",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "24px" }}>{brand}</h1>
            <h2 style={{ margin: "10px 0" }}>{name}</h2>
            <button
              style={{
                backgroundColor: "#0096FF",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {networkTechnology}
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "#FFD700", marginRight: "5px" }}>
                <Rating
                  value={averageOverallRating}
                  precision={0.1}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": { color: "#e8733b" },
                    "& .MuiRating-iconEmpty": { color: "#e8733b" },
                  }}
                />
              </span>
              <span style={{ marginLeft: "10px" }}>
                {totalReviewsCount} Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
