import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center text-sm gap-x-10 h-[80px]'>
            <NavLink className={(e) => e.isActive ? "text-rose-600" : ""} to="/">
                Home
            </NavLink>
            <NavLink className={(e) => e.isActive ? "text-rose-600" : ""} to="/about">
                About
            </NavLink>
            <NavLink className={(e) => e.isActive ? "text-rose-600" : ""} to="/recipes">
                Recipes
            </NavLink>
            <NavLink className={`px-4 py-2 bg-gray-900 rounded  ${(e) => e.isActive ? "text-rose-600" : ""}`} to="/create">
                Create Recipe
            </NavLink>
        </div>
    )
}

export default Navbar