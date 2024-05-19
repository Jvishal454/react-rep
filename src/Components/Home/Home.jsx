import React from 'react'
import './Home.css'
import svgShopping1 from '../../assets/SVG/shopping-1.svg'

const Home = () => {
  return (
    <div className='container'>
       <div className="col-1">
        <div className="row-1">
          <p> Sale</p>
          <p> on Best Products</p>
        </div>
        <div className="row-2">
          
          <img className='svg-cart' src={svgShopping1} alt="" draggable='false' />
        </div>
       </div>
       <div className="col">
        COL-2
       </div>
    </div>
  )
}

export default Home