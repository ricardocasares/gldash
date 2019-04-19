import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { relative } from "../lib/time";

import Box from "./Box";
import Time from "./Time";
import Avatar from "./Avatar";

const colors = {
  pending: `repeating-linear-gradient(
    -45deg, 
    #74c0fc, 
    #74c0fc 1rem,
    #4dabf7 1rem,
    #4dabf7 2rem
  )`,
  running: `repeating-linear-gradient(
    -45deg, 
    #ff922b, 
    #ff922b 1rem,
    #ffa94d 1rem,
    #ffa94d 2rem
  )`,
  success: "green",
  failed: "red",
  canceled: "#adb5bd",
  manual: "#adb5bd",
  skipped: "#adb5bd"
};

const frames = keyframes`
  100% {
    background-position: 100% 100%;
  }
`;

const StyledBox = styled(Box)`
  color: white;
  background: ${({ status }) => colors[status]};
  background-size: 300% 300%;
  grid-template-columns: 1fr auto;
  animation: ${frames} 10s linear infinite;
  border-radius: 5px;

  h2,
  h3,
  h4 {
    margin: 2px 0;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h3 {
    color: #000;
    opacity: 0.7;
    text-transform: uppercase;
  }

  h4 {
    color: #000;
    opacity: 0.7;
  }
`;

const Job = ({ gitref, status, stage, user, created_at }) => {
  return (
    <StyledBox grid gap={10} p={15} align="center" status={status}>
      <Box grid>
        <h2>{stage}</h2>
        <h3>{status}</h3>
        <h4>{gitref}</h4>
        <Time>{relative(created_at)}</Time>
      </Box>
      <Avatar {...user} />
    </StyledBox>
  );
};

export default Job;
