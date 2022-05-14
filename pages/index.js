import React from 'react'


function Home() {
  return (
    <>
    HeroBanner
    <div className='products-heading'>
      <h2>Best Selling Product</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
    {["product1", "product2"].map (product => product)}
    </div>
    footer
    </>
  )
}

export default Home