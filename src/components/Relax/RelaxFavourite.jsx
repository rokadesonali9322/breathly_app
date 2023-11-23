import React from "react";
import { Box, Typography, styled } from "@mui/material";
import RelaxTop from "./RelaxTop";

const Wrapper = styled(Box)`
  /* background-color: #dbd8d8; */
  text-align: center;
  width: 100%;
  height: 450px;
  padding-top: 20px;
  box-shadow: 5px 10px 20px #888888 inset;
`;

const RelaxFavourite = () => {
  return (
    <>
      <RelaxTop />
      <Wrapper>
        <Typography>My Favourite Work!!</Typography>
      </Wrapper>
    </>
  );
};

export default RelaxFavourite;
