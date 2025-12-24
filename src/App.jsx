import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(`value submited ${item}`)
    setList(list.concat(item))
  }
  return (
    <>
      <div className='flex justify-between items-center px-5  h-20 w-screen font-semibold text-20 bg-red-950 text-white fixed'>
        <Link to='/' className=''>Logo</Link>
        <form onSubmit={handelSubmit}>
          <input
            className='border border-gray-300 p-2 rounded-s-full mx-1'
            type="text"
            name="add"
            id="add"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='border rounded-r-full p-2 '>Add</button>
        </form>
        <nav className='flex justify-between gap-10'>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/more'>More</Link>
        </nav>
      </div>

      <div className=' font-semibold text-white  flex justify-items-center p-60 bg-amber-700 '>
        <ul>
          {list.map((item, i) => {
            return <li key={i} className='border border-gray-300 px-7 my-2 rounded-full mx-1'>{item}</li>
          })}
        </ul>

      </div>
    </>
  )
}

export default App