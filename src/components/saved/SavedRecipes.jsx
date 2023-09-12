import React,{useState, useEffect } from 'react'
import './saved.css'
import IWantToMakeSearch from '../search/IWantToMakeSearch'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import axios from 'axios'

const SavedRecipes = ({ recipe }) => {
    // const token = localStorage.getItem('recievedToken')

    const navigate = useNavigate()

    const [data, setData] = useState([])

    const [RECIPE, setRECIPE] = useState([])

    useEffect(() => {
        axios.get('https://food-q03d.onrender.com/api/getRecipe', {
            // headers: {
            //     'Authorization': "Bearer " + token
            // }
        })
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
    }, [])

    useEffect(() => {
        setRECIPE(recipe)
    }, [recipe])

    // const email = localStorage.getItem('email')

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
                        RECIPE.map((element, index) => (
                            <div id='saved-page-added-from-recipes'>
                                <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                <h3>{element.recipe.label}</h3>
                            </div>
                        ))
                    }
                    {
                        data && data.map((element, index) => (
                            <div id='added-recipes-card'>
                                <img src='' alt=''></img>
                                <h3>{element.recipeTitle.toUpperCase()}</h3>
                                {/* <p>By {email.substring(0, email.length - 10)}</p> */}
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