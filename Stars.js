import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'; // font awesome star from react icon library

// component for individual star
const Star ({ selected = false, onSelect = f => f}) => (
  <FaStar color = { selected ? 'red' : 'grey'} onClick = {onSelect} />
)

// function that takes length as arg and creates array of that length
const createArray = length => [...Array(length)];


export default function StarRating({ totalStars = 5 }) {
  //set state
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key = {i}
          selected = {selectedStars > i
          onSelect = {() => setSelectedStars(i + 1)}}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
