import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import {client} from '../lib/client'


function Home({products, bannerData}) {
  return (
    <div>
    <HeroBanner 
    heroBanner={bannerData.length && bannerData[0]}
    />
    <div className='products-heading'>
      <h2>Best Selling Product</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
    {products?.map (product => product.name)}
    </div>
    <Footer/>
    </div>
  )
}
export  async function  getServerSideProps(){
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return {
      props:{
        products, bannerData
      }
    }
}

export default Home