import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListSubheader,
  Box,
  SelectChangeEvent,
} from "@mui/material";
// import CustomDropdownIcon from "./CustomDropdownIcon";

interface SortByDropdownProps {
  selectedOption: string; // The currently selected dropdown value
  onChange: (event: SelectChangeEvent<string>) => void;
}

const SortByDropdown: React.FC<SortByDropdownProps> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#00008c" }} id="sort-and-rating-label">
          Sort by
        </InputLabel>
        <Select
          labelId="sort-and-rating-label"
          value={selectedOption}
          onChange={onChange}
          label="Sort by"
          sx={{
            color: "#00008c",
          }}
        >
          {/* Group: Sort By */}

          <MenuItem
            value="mostRecent"
            sx={{
              fontSize: "16px",
              letterSpacing: "0",
              lineHeight: "24px",
              color: "#00008c",
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Most Recent
          </MenuItem>
          <MenuItem
            value="mostHelpful"
            sx={{
              fontSize: "16px",
              letterSpacing: "0",
              lineHeight: "24px",
              color: "#00008c",
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Most Helpful
          </MenuItem>

          {/* Group: Rating */}
          <ListSubheader
            sx={{
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Rating
          </ListSubheader>
          <MenuItem
            value="highestToLowest"
            sx={{
              fontSize: "16px",
              letterSpacing: "0",
              lineHeight: "24px",
              color: "#00008c",
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Highest to Lowest
          </MenuItem>
          <MenuItem
            value="lowestToHighest"
            sx={{
              fontSize: "16px",
              letterSpacing: "0",
              lineHeight: "24px",
              color: "#00008c",
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Lowest to Highest
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
