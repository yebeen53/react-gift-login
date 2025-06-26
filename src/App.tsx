import { useState } from 'react'
import GlobalStyles from './emotionstyle'
import Navibar from './navigation'
import React from "react";
import SelectCategory from "./selectCategory";
import Banner from "./elsesection";
import GiftRanking from "./giftRanking";
import SelectFr from './selectFr';

function App() {

  return (
    <>
      <GlobalStyles/>
      <Navibar/>
      <SelectFr/>
      <SelectCategory />
      <Banner/>
      <GiftRanking/>
    </>
  )
}

export default App
