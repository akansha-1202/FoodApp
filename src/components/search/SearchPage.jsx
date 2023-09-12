import React, { useState } from 'react'
import './search.css'
import { AiOutlineSearch } from 'react-icons/ai'
import IWantToMakeSearch from './IWantToMakeSearch'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    const APP_ID = 'e95f07ed'
    const APP_KEY = 'a26cf3b8f2504e6eb9e9db8524fe4a27'

    const getSearchRecipes = (searchQuery) => {
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
        console.log(data)
    }

    return (
        <>
            <div id='search-page'>
                <div id='search-page-i-want-to-make'>
                    <div id='search-page-i-want-to-make-container'>
                        <div id='search-page-i-want-to-make-search-bar-and-text'>
                            <h3>I WANT TO MAKE</h3>
                            <div id='search-page-i-want-to-make-search-bar'>
                                <AiOutlineSearch id='search-page-i-want-to-make-search-bar-search-icon' />
                                <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                                <button onClick={() => getSearchRecipes(search)}>SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id='search-page-your-recent-searches'>
                    <p>YOUR RECENT SEARCHES</p>
                </div> */}
            </div>
            <div id='search-page-search-data'>
                <h2>SEARCH RESULTS . . .</h2>
                <div id='search-page-search-data-container'>
                    <div id='search-page-search-data-cards-container'>
                        {
                            data.map((element, index) => (
                                <div id='search-page-search-data-cards'>
                                    <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                    <h3>{element.recipe.label}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
        </>
    )
}

export default SearchPage