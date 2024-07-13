import React from "react";
import { BtnClearAll } from "@/app/styles";
import { ClearAllButtonProps } from "@/interfaces";

const ClearAllButton: React.FC<ClearAllButtonProps> = ({ clearAllFields }) => (
  <BtnClearAll onClick={clearAllFields}>Clear All</BtnClearAll>
);

export default ClearAllButton;
