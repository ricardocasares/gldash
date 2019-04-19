import React from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";
import reset from "./lib/reset";
import useConfig from "./lib/effects/config";
import Box from "./components/Box";
import Project from "./components/Project";

const App = () => {
  const [error, loading, { projects }] = useConfig();

  return (
    <Box grid gap={10} p={10}>
      <Global styles={reset} />
      {loading && <h2>Loading config</h2>}
      {error && <h2>There was an error loading the config</h2>}
      {!!projects.length && (
        <Box grid gap={10} cols={projects.length}>
          {projects.map(id => (
            <Project key={id} id={id} />
          ))}
        </Box>
      )}
    </Box>
  );
};

render(<App />, document.querySelector("#root"));
