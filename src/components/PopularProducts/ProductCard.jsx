import React from 'react'

const ProductCard = ({product}) => {
    const {title, price, img, rating} = product;
  return (
<div className='shadow-xl rounded-2xl border-gray-200 border flex flex-col  p-6 gap-3'>
  
  <div className='bg-gray-100 w-full h-52 flex items-center justify-center rounded-2xl'>
    <img src={img} alt={title} className='w-32 h-32 object-cover' />
  </div>

  <h3 className='text-xl font-semibold'>{title}</h3>

  <div className='flex justify-between w-full'>
    <p>Price: <span className='text-red-500'>${price}</span></p>
    <p>⭐ {rating}</p>
  </div>

</div>
  )
}

export default ProductCard