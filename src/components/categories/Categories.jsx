import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./categories.css";
import IWantToMakeSearch from "../search/IWantToMakeSearch"
import { BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import axios from "axios";

const Categories = () => {
  const [data, setData] = useState([]);

  const params = useParams();

  const APP_ID = "bd148452";
  const APP_KEY = "cd27f1ff1e262cfc703a6dd8a6814abf";

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${params.recipename}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=60`
      )
      .then((response) => setData(response.data.hits));
  }, [params.recipename]);

  return (
    <>
      <div id="recipe-categories-page-one">
        <div>
        <div id="recipe-categories-page-one-heading-description-text-container">
          <h1 id="recipe-categories-page-one-heading">
           {data.length} {params.recipename.toUpperCase()}
          </h1>
          <p id="recipe-categories-page-one-description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div id="recipe-categories-page-one-social-icons">
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
        <div id="recipe-categories-page-recipes-container">
          <div id="left-side">
            {data.map((element, index) => (
              <div id="recipe-categories-page-recipes" key={index}>
                <Link to={`/recipedescription/${element.recipe.label}`}  >
                  <img src={element.recipe.image} alt="recipes"></img>
                </Link>
                <Link to={`/recipedescription/${element.recipe.label}`}  >
                  <div id="recipe-categories-page-text">
                    <p>RECIPE</p>
                    <h1>{element.recipe.label}</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </Link>
              </div>
            ))}
            </div>

           <div  className='category-fixed-advertisement'>
            <div id='category-advertisement'>
              <img src='https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' id='cat-gif-img'/>
            </div>
        </div>
        </div>
        </div>

       
        
      </div>
      <IWantToMakeSearch/>

    </>
  );
};

export default Categories;
