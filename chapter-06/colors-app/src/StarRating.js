import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa'; // font awesome star from react icon library

// component for individual star
const Star = ({ selected = false, onSelect = f => f}) => (
  <FaStar color = { selected ? 'red' : 'grey'} onClick = {onSelect} />
);

// function that takes length as arg and creates array of that length
const createArray = length => [...Array(length)];

export default function StarRating ({
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key = {i}
          selected = {selectedStars > i}
          onSelect = {() => onRate(i + 1)}
        />
      )) }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
