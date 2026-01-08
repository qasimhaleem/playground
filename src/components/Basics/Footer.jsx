import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='flex justify-evenly items-center'>
            <p className='bg-slate-600'>Create with heat by m Qasim</p>
            <div className='flex justify-center items-center'>
                <Link>github</Link>
                <Link>linedin</Link>
                <Link>faceboo</Link>
            </div>
            copyright all right reserved to MQasim
        </footer>
    )
}

export default Footer