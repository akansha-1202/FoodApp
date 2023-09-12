import React from 'react'
import './search.css'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FindMoreRecipes = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    const APP_ID = 'bd148452'
    const APP_KEY = 'cd27f1ff1e262cfc703a6dd8a6814abf'

    const getSearchRecipes = (searchQuery) => {
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
        console.log(data)
        setSearch("");
    }

    return (
        <>
            <div id='find-more-recipes'>
                <div id='find-more-recipes-container'>
                    <h2>FIND MORE RECIPES</h2>
                    <div id='find-more-recipes-search-bar'>
                        <BsSearch id='find-more-recipes-search-bar-search-icon' />
                        <input type='search' placeholder="I'm Craving..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                    <button onClick={() => getSearchRecipes(search)}>SEARCH</button>
                </div>
            </div>
            <div id='find-more-recipes-search-data'>
                <p>SEARCH RESULTS . . .</p>
                <div id='find-more-recipes-search-data-container'>
                    <div id='find-more-recipes-search-data-cards-container'>
                        {
                            data.map((element, index) => (
                                <div id='find-more-recipes-search-data-cards' key={index}>
                                    <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                    <h3 id="find-more-recipes-search-data-cards-heading">{element.recipe.label}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindMoreRecipes