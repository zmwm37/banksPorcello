import React, { useContext } from "react";
import Color from "./Color.js"
import { useColors } from './color-hooks.js';

export default function ColorList(){
  const { colors } = useColors();
  return (
    <div className = "color-list">
      {
        colors.map(color =>
          <Color
            key = {color.id}
            {...color}
          />)
      }
    </div>
  );
}
