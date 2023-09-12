import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import FindMoreRecipes from '../search/FindMoreRecipes';
// import { GrNext } from 'react-icons/gr'
// import { GrPrevious } from 'react-icons/gr'
import { BsBookmark } from 'react-icons/bs'
import { TfiDownload } from 'react-icons/tfi'
import { BsPrinter } from 'react-icons/bs'
import { BsArrow90DegRight } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import { MdEditNote } from 'react-icons/md'

const CategoriesDescription = ({ saveRecipe }) => {
    const [data, setData] = useState()
    const { recipename } = useParams()

    const APP_ID = 'e95f07ed'
    const APP_KEY = 'a26cf3b8f2504e6eb9e9db8524fe4a27'

    useEffect(() => {
        axios.get(`https://api.edamam.com/search?q=${recipename}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
    }, [recipename])

    return (
        <>
            <div id='recipe-categories-description-page'>
                {/* <div id='recipe-categories-description-page-previous-next'>
                    <h3><GrPrevious id='recipe-categories-description-page-previous-icon' /> PREVIOUS</h3>
                    <h3>NEXT <GrNext id='recipe-categories-description-page-next-icon' /></h3>
                </div> */}
                {
                    data && data.filter((item) => { return item.recipe.label === recipename }).slice(0, 1).map((element, index) => (
                        <div id='recipe-categories-description-page-container' key={index}>
                            <h1>{element.recipe.label}</h1>
                            <p style={{color:"#1769C2", fontWeight:500}}>⭐⭐⭐⭐⭐{"(" + Math.floor(Math.random() * 100) + ")"}</p>
                            <hr/>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <div id='recipe-categories-description-page-container-icons'>
                                <div onClick={() => {
                                    saveRecipe(element)
                                    alert("Recipe Saved Successfully!!!")
                                }}><BsBookmark fontSize="1.5rem"/></div>
                                <div><TfiDownload fontSize="1.5rem"/></div>
                                <div>< BsPrinter fontSize="1.5rem"/></div>
                                <div><BsArrow90DegRight fontSize="1.5rem"/></div>
                                <div id='camera'><BsCamera fontSize="1.5rem"/> I MADE THIS</div>
                            </div>

                            <img src={element.recipe.image} alt=''></img>
                            <h3>INGREDIENTS</h3>
                            {element.recipe.ingredientLines.map((item) => (<p>{item}</p>))}
                            {/* <div id='recipe-categories-description-page-reviews'>
                            <div id='recipe-categories-description-page-reviews-header'>
                                <h3>REVIEWS</h3>
                                <div id='recipe-categories-description-page-reviews-header-write-review'>
                                        <h3><MdEditNote /> WRITE A REVIEW</h3>
                                </div>
                                </div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                            </div> */}
                        </div>
                    ))
                }

            
                <div id="recipe-categories-description-social-icons">
                    <Link to="https://in.pinterest.com/fooddotcom/" target="_blank" style={{backgroundColor:"red"}}>
                        <BiLogoPinterestAlt fontSize="1.8rem" color="white"/>
                    </Link>
                    <Link to="https://www.facebook.com/food.com/" target="_blank" style={{backgroundColor:"#38529A"}}>
                        <FaFacebookF fontSize="1.8rem" color="white"/>
                    </Link>
                    <Link to="https://help.food.com/hc/en-us" target="_blank" style={{backgroundColor:"rgb(76, 76, 76)"}}>
                        <IoIosMail fontSize="1.8rem" color="white"/>
                    </Link>
                 </div>

            </div>
            <FindMoreRecipes/>
        </>
    )
}

export default CategoriesDescription