import React from 'react'
import './Home.css'
import svgShopping1 from '../../assets/SVG/shopping-1.svg'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div className='container'>
       <div className="col-1">
        <div className="row-1">
          <p>New Arrivals of the Month</p>
          <p> Sale is Live</p>
          <p> on Best Products</p>
          <Button variant="outlined" color="inherit">Explore Collection</Button>
        </div>
        <div className="row-2">
          
          <img className='svg-cart' src={svgShopping1} alt="" draggable='false' />
        </div>
       </div>
       {/* <div className="col">
        COL-2
       </div> */}
    </div>
  )
}

export default Home