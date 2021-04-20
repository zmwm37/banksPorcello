import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  const [Colors] = useState(colorData);
  return <ColorList colors = {colors} />;
};
