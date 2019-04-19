import React from "react";
import styled from "@emotion/styled";
import useGitLab from "../lib/effects/gitlab";
import useInterval from "../lib/effects/interval";
import Box from "./Box";
import Job from "./Job";

const Header = styled.h2`
  margin: 0;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledBox = styled(Box)`
  grid-template-rows: ${({ rows }) => `auto repeat(${rows}, 1fr)`};
`;

const Project = ({ id }) => {
  const [jobs = [], error, loading, refresh] = useGitLab(
    `/projects/${encodeURIComponent(
      id
    )}/jobs?scope[]=success&scope[]=pending&scope[]=running&scope[]=failed`
  );

  useInterval(refresh, 10000);

  const [, name] = decodeURIComponent(id).split("/");

  return (
    <StyledBox grid gap={10} rows={jobs.length}>
      <Header>{name}</Header>

      {error && <h2>There was an error loading the jobs.</h2>}

      {!!jobs.length &&
        jobs.map(({ id, ref, ...props }) => (
          <Job key={id} gitref={ref} {...props} />
        ))}
    </StyledBox>
  );
};

export default Project;
