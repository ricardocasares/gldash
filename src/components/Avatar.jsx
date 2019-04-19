import React from "react";
import styled from "@emotion/styled";
import Box from "./Box";

const Img = styled.img`
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;

const Avatar = ({ username, avatar_url }) => (
  <Img src={avatar_url} alt={username} />
);

export default Avatar;
