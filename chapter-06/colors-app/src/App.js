// i didn't remove all the stuff beofre retrieving colors with useContext. come back after that section to see if I can replicate app.js from pg. 123
import React, { useState } from "react";
import ColorList from "./ColorList.js";
import AddColorForm from './AddColorForm.js';
import { v4 } from 'uuid';

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>

  );
};
