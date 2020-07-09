import React from "react";

import { iconConfig } from "./iconConfig";

export const Icon = ({ name, ...props }) => {
  const IconC = iconConfig[name];
  return <IconC {...props} />;
};
