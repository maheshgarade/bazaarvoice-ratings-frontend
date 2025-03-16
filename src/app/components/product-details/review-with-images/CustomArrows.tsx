import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ color: "blue" }}>
      <ArrowBackIosIcon fontSize="large" />
    </div>
  );
};

const CustomNextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ color: "blue" }}>
      <ArrowForwardIosIcon fontSize="large" />
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
