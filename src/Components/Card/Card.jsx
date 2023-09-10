import React from 'react'

const Card = () => {
  return (
    <div className='Card bg-slate-700 w-auto p-5 m-5 rounded-md text-start'>
        <h1>Card</h1>
        <img className=' w-max rounded-lg' src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80" alt="image" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio porro et dolores quis doloremque adipisci?</p>
        <button className="btn mt-5">Read more</button>
    </div>
  )
}

export default Card;