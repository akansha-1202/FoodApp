import React,{useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./home/Home"
import Login from './form/Login'
import Register from './form/Register'
import SearchPage from './search/SearchPage'
import Categories from './categories/Categories'
import CategoriesDescription from './categories/CategoriesDescription'
import User from './profile/User'
import AddRecipe from './addRecipe/AddRecipe'
import MyBoards from './saved/MyBoards'
import SavedRecipes from './saved/SavedRecipes'

export default function RoutingFiles() {
  const [recipe, setRecipe] = useState([]);
  const saveRecipe = (data) => {
    setRecipe([...recipe, { ...data }])
  }
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path="/recipes/:recipename" element={<Categories/>}/>
            <Route path='/recipedescription/:recipename' element={<CategoriesDescription saveRecipe={saveRecipe} />}></Route>
            <Route path='/userprofile/:filtername' element={<User />}/>
            <Route path='/saved/recipes' element={<SavedRecipes recipe={recipe} />}/>
            <Route path='/saved/myboards' element={<MyBoards />}/>
            <Route path='/addRecipe' element={<AddRecipe/>}/>
        </Routes>
    </>
  )
}
