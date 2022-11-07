import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#999999",
    },
    "&:hover fieldset": {
      borderColor: "#999933",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const SearchBar = () => {
  return (
    <div>
      <CssTextField
        hiddenLabel
        placeholder="Search for poster, cases"
        id="custom-css-outlined-input"
      >
        <SearchIcon />
      </CssTextField>
    </div>
  );
};

export default SearchBar;
