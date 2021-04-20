import React, { useState } from 'react';
import {FaMandalorian} from 'react-icons/fa'; // font awesome star from react icon library

// component for individual star
const Star = ({ selected = false, onSelect = f => f}) => (
  <FaMandalorian color = { selected ? 'red' : 'grey'} onClick = {onSelect} />
);

// function that takes length as arg and creates array of that length
const createArray = length => [...Array(length)];

export default function StarRating ({ totalStars = 5, selectedStars = 0 }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key = {i}
          selected = {selectedStars > i}
        />
      )) }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
