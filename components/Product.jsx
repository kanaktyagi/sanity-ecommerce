import React from 'react'
import { urlFor } from '../lib/client'
  import Link from 'next/link'


function Product({product: {image, name, slug, price}, specialprop=""}) {
  return (
    <div>
      <Link href={ specialprop ? `${slug.current}` :`product/${slug.current}`}>
      <div className='product-card'>
        <img src={urlFor(image && image[0])}
        width={250}
        height={250}
        className="product-image"
        />
        <p className='product-name'>{name}</p>
        <p className='product-price'>${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product