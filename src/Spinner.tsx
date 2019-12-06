import { Box } from "grommet";
import React from "react";

// For storybook
// @ts-ignore
import spinnerImage from "./images/spinner.gif";

export const Spinner = () => (
  <Box style={{ position: "absolute" }}>
    <img src={spinnerImage} alt="Busy" />
  </Box>
);