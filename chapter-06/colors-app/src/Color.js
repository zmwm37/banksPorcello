import React from "react";
import StarRating from "./StarRating.js";
import {FaTrash} from "react-icons/fa"

export default function Color({
   id,
   title,
   color,
   rating,
   onRemove = f => f,
   onRate = f => f}) {
  return (
    <section key = {color}>
      <h1>{title}</h1>
      <button onClick = { () => onRemove(id) }>
        <FaTrash />
      </button>
      <div style = {{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars = {rating}
        onRate = {rating => onRate(id, rating)}
       />
    </section>
  );
}
