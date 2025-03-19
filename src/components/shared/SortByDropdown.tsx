"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListSubheader,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  SelectChangeEvent,
} from "@mui/material";
import { DownChevronIcon, UpChevronIcon } from "./CustomDropdownIcon";

interface SortByDropdownProps {
  selectedOption: string; // The currently selected dropdown value
  onChange: (event: SelectChangeEvent<string>) => void;
}

const SortByDropdown: React.FC<SortByDropdownProps> = ({
  selectedOption,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // State to track which radio is selected
  const [radioValue, setRadioValue] = useState(selectedOption);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setRadioValue(newValue); // Update radio button selection state
    onChange({ target: { value: newValue } } as SelectChangeEvent<string>); // Update parent state
  };

  // Map the values to display labels
  const valueToLabelMap: Record<string, string> = {
    mostRecent: "Most Recent",
    mostHelpful: "Most Helpful",
    highestToLowest: "Highest to Lowest",
    lowestToHighest: "Lowest to Highest",
  };

  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#00008c" }} id="sort-and-rating-label">
          Sort by
        </InputLabel>
        <Select
          labelId="sort-and-rating-label"
          value={radioValue}
          onChange={onChange}
          label="Sort by"
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          sx={{
            color: "#00008c",
          }}
          IconComponent={() =>
            isOpen ? <UpChevronIcon /> : <DownChevronIcon />
          }
          renderValue={(selected) => valueToLabelMap[selected] || ""}
        >
          {/* Group: Sort By */}
          <MenuItem disableRipple>
            <RadioGroup value={radioValue} onChange={handleRadioChange}>
              <FormControlLabel
                value="mostRecent"
                control={<Radio sx={{ color: "#00008c" }} />}
                label="Most Recent"
              />
              <FormControlLabel
                value="mostHelpful"
                control={<Radio sx={{ color: "#00008c" }} />}
                label="Most Helpful"
              />
            </RadioGroup>
          </MenuItem>

          {/* Divider */}
          <ListSubheader
            sx={{
              fontFamily:
                "Frutiger LT Std 55 Roman, Helvetica, Arial, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              paddingBottom: "4px",
            }}
          >
            Rating
          </ListSubheader>
          <MenuItem disableRipple>
            <RadioGroup value={radioValue} onChange={handleRadioChange}>
              <FormControlLabel
                value="highestToLowest"
                control={<Radio sx={{ color: "#00008c" }} />}
                label="Highest to Lowest"
              />
              <FormControlLabel
                value="lowestToHighest"
                control={<Radio sx={{ color: "#00008c" }} />}
                label="Lowest to Highest"
              />
            </RadioGroup>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
