import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { Device } from "@/types";

interface PhoneSectionProps {
  data: Device;
}

const PhoneSection: React.FC<PhoneSectionProps> = ({ data }) => {
  const {
    brand,
    name,
    image,
    averageOverallRating,
    totalReviewsCount,
    networkTechnology,
    backgroundImages,
  } = data;

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
        <div style={{ display: "flex" }}>
          {/* Phone Image */}
          <div style={{ marginRight: "40rem" }}>
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
          {/* Details */}
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily:
                    "Frutiger LT Std 65 Bold, Helvetica, Arial, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "32px",
                  textTransform: "uppercase",
                }}
              >
                {brand}
              </h1>
              <h2
                style={{
                  margin: "8px 0px",
                  fontFamily:
                    "Frutiger LT Std 45 Light, Helvetica, Arial, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "48px",
                  lineHeight: "56px",
                }}
              >
                {name}
              </h2>
              <button
                style={{
                  backgroundColor: "#82dcfa",
                  color: "#00008c",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily:
                    "Frutiger LT Std 65 Bold, Helvetica, Arial, sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "31px",
                  marginTop: "1px",
                  textAlign: "center",
                  padding: "0 20px",
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
    </div>
  );
};

export default PhoneSection;
