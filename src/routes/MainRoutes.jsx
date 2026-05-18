import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import RecipeDetails from '../pages/RecipeDetails'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>

            <Route path='/recipes' element={<Recipes />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/recipe/details/:id' element={<RecipeDetails />}></Route>
        </Routes>
    )
}

export default MainRoutes