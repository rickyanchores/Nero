import React from 'react'

const Product = () => {
  return (
    <div className='Product bg-gray-800 min-h-screen flex justify-around items-center'>
        <div className="text p-8">
          <h1 className='text-4xl'>Product</h1>
          <p className='pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut maxime eveniet animi excepturi quis inventore fugiat laboriosam autem aliquid error!</p>
        </div>
        <img className=' w-2/4 p-12' src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="product-img" />
    </div>
  )
}

export default Product;