import React,{useState, useEffect } from 'react'
import './saved.css'
import IWantToMakeSearch from '../search/IWantToMakeSearch'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import axios from 'axios'


const SavedRecipes = () => {

    const user_id = localStorage.getItem('user_id')
    const [savedRecipeData, setSavedRecipeData] = useState([]); // State for the first API call
    const [recipeData, setRecipeData] = useState([]); // State for the second API call

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://food-q03d.onrender.com/api/getSavedRecipe/${user_id}`)
            .then((response) => setSavedRecipeData(response.data))
            .catch((error) => console.log("Error", error))
    }, [user_id]);
    // console.log("save" ,savedRecipeData);

    useEffect(() => {
        axios.get(`https://food-q03d.onrender.com/api/getRecipe/${user_id}`)
            .then((response) => setRecipeData(response.data))
            .catch((error) => console.log("Error", error))
    }, [user_id]);  
    
    // console.log("add" ,recipeData);
    


    return (
        <>
            <div id='saved-page'>
                <div id='saved-page-header'>
                    <h2>SAVES</h2>
                </div>
                <div id='saved-page-recipes-my-boards'>
                    <NavLink to='/saved/recipes'>RECIPES</NavLink>
                    <NavLink to='/saved/myboards'>MY BOARDS</NavLink>
                </div>
                <div id='saved-page-recipes'>
                    <div id='discover-recipes-card'>
                        <BsFillPlusCircleFill id='saved-page-recipes-plus-icon' onClick={() => navigate('/')} />
                        <h3 onClick={() => navigate('/')}>DISCOVER &nbsp;RECIPES</h3>
                        <p>..... or .....</p>
                        <Link to='/addRecipe'>Add Your Own Recipe</Link>
                    </div>
                    {
                        savedRecipeData[0]?.savedRecipe.map((element, index) => (
                            <div id='saved-page-added-from-recipes' key={index}>
                                <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                <h3>{element.recipe.label}</h3>
                            </div>
                        ))
                    }
                    {
                        recipeData && recipeData.map((element, index) => (
                            <div id='added-recipes-card' key={index}>
                                <img src='' alt=''></img>
                                <h3>{element.recipeTitle.toUpperCase()}</h3>
                            </div>
                        ))
                    }
                </div>
            </div >
            <IWantToMakeSearch />
        </>
    )
}

export default SavedRecipes