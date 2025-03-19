"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReviewWithPhoto } from "@/types";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows"; // Import arrows
import styles from "./ReviewWithImages.module.css"; // Import the CSS module

interface ReviewWithImagesProp {
  data: ReviewWithPhoto[];
}

const ReviewWithImages: React.FC<ReviewWithImagesProp> = ({ data }) => {
  const [selectedReview, setSelectedReview] = useState<ReviewWithPhoto | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (review: ReviewWithPhoto) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Slider {...settings}>
        {data.map((review, index) => (
          <Box
            key={index}
            className={styles.thumbnailBox}
            onClick={() => openModal(review)}
          >
            <Image
              src={review.photo.sizes.thumbnail}
              alt={`Review by ${review.review.userName}`}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>

      <Dialog open={isModalOpen} onClose={closeModal} maxWidth="md" fullWidth>
        {selectedReview && (
          <>
            <DialogTitle>
              Review by {selectedReview.review.userName}
              <IconButton
                aria-label="close"
                onClick={closeModal}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: "flex", gap: 4 }}>
              <Box sx={{ flex: "1 1 50%" }}>
                <Image
                  src={selectedReview.photo.sizes.large}
                  alt={`Review by ${selectedReview.review.userName}`}
                  width={400}
                  height={400}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Box sx={{ flex: "1 1 50%" }}>
                <Rating
                  value={selectedReview.review.rating}
                  readOnly
                  precision={0.5}
                />
                <Typography>{selectedReview.review.cardText}</Typography>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ReviewWithImages;
