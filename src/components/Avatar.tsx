import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

const Img = styled.img`
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
`;

export type AvatarProps = { username: string; avatar_url: string };

const Avatar: FunctionComponent<AvatarProps> = ({ username, avatar_url }) => (
  <Img src={avatar_url} alt={username} />
);

export default Avatar;
