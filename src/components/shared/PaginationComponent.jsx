"use client";
import React from "react";
import { Button, Box, Typography } from "@mui/material";

const PaginationComponent = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const Arrow = ({ direction }) => (
    <Box
      sx={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "#0050ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        margin: "0 auto",
      }}
    >
      {direction === "left" ? "<" : ">"}
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="10px"
    >
      <Box textAlign="center">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{ textTransform: "none" }}
        >
          <Arrow direction="left" />
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Back
          </Typography>
        </Button>
      </Box>

      <Typography>
        {currentPage} of {totalPages}
      </Typography>

      <Box textAlign="center">
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{ textTransform: "none" }}
        >
          <Typography variant="body2" sx={{ marginTop: "5px" }}>
            Next
          </Typography>
          <Arrow direction="right" />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationComponent;
