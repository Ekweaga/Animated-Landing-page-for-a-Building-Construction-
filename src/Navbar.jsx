import React from 'react'
import bg from "./aoka.png"

export default function Navbar() {
  return (
    <>
    <nav className='flex justify-between items-center p-4'>
        <div className="flex items-center gap-[10px]">
            <img src={bg}/> <h3 className="font-bold">Aoka</h3>

        </div>

        <div>
            <ul className='flex justify-between items-center gap-[30px]'>
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

        </div>
    </nav>
    </>
  )
}
