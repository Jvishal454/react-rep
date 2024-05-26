import React, { useState } from 'react'
import Home from '../Components/Home/Home'
import ExploreMenu from '../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../Components/FoodDisplay/FoodDisplay';
import './LandingPage.css'

const LandingPage = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
        <Home />
        <ExploreMenu category={category} setCategory={setCategory} className="explore-menu" />
        <FoodDisplay  category={category} className="food-display" />
    </div>
  )
}

export default LandingPage