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
        <InputLabel id="sort-and-rating-label">Sort by</InputLabel>
        <Select
          labelId="sort-and-rating-label"
          value={selectedOption}
          onChange={onChange}
          label="Sort by"
        >
          {/* Group: Sort By */}

          <MenuItem value="mostRecent">Most Recent</MenuItem>
          <MenuItem value="mostHelpful">Most Helpful</MenuItem>

          {/* Group: Rating */}
          <ListSubheader>Rating</ListSubheader>
          <MenuItem value="highestToLowest">Highest to Lowest</MenuItem>
          <MenuItem value="lowestToHighest">Lowest to Highest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
