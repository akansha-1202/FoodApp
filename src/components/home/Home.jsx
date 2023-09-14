import React from "react";
import "./home.css";
import {
  comment,
  homeData1,
  homeData2,
  homeData3,
  homeData4,
  homeData5,
  homeData6,
} from "./homeData";
import {AiOutlineHeart} from "react-icons/ai"
import FindMoreRecipes from '../search/FindMoreRecipes';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="layout">
      <div className="big-block">
        <div className="block-items">
          <img
            src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg"
            alt="big"
            className="block-image"
          />
          <div className="block-text">
            <div className="block-text-title">56 GRILLED CHICKEN RECIPES</div>
            <Link to="/recipes/grilled chicken recipes">
              <button className="block-text-button">SEE THEM ALL</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bar"></div>

      {comment.map((item, index) => (
      <div className="layout-item" key={index}>
        <div className="heading">
          <h2>{item.heading}</h2>
        </div>

        <div className="review-box">
        {item.content.map((item, index) => (
          <div id="home-comment">
             <div id="comment-header">
              <img src={item.icon} alt="comment"/>
              <p>{item.user} <span>{item.mid}</span> {item.recipe}</p>
             </div>
           <div id="comment-content">{item.comment}</div>
           <div id="comment-footer" className="comment-bottom">
            <p style={{color:"#706666"}}>{item.time}</p>
            <p>REPLY  <AiOutlineHeart color="red" fontSize="0.8rem"/></p>
           </div>
          </div>
          ))} 
          {item.contentImage.map((item, index) => (
          <div id="home-comment">
                <div id="comment-header">
                  <img src={item.icon} alt="comment"/>
                  <p>{item.user} <span>{item.mid}</span> {item.recipe}</p>
                </div>
               <div id="comment-content"><img src={item.photo} alt="comment"/></div>
                <div id="comment-footer">
                  <p style={{color:"#706666"}}>{item.time}</p>
                  <p>REPLY <AiOutlineHeart color="red" fontSize="0.8rem"/></p>
                </div>
          </div>
          ))}
        </div>
      </div>

))}

      {homeData1.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>
          <div className="review-box">
            {item.content.map((item, index) => (
              <Link to={`/recipes/${item.subHeading}`}>
                <div className="home1" key={index}>
                  <img src={item.images} alt="images" />
                  <div className="text-home1">
                    <div id="collection">COLLECTION</div>
                    <div id="subHead">
                      {item.number} {item.subHeading}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {homeData2.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>

          <div className="review-box-home2">
            {item.content.map((item, index) => (
              <Link to={`/recipes/${item.subHeading}`} className="home2" key={index}>
                  <img src={item.images} alt="images" />
                  <div className="text">{item.subHeading}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="bar"></div>

      {homeData3.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>

          <div className="review-box-grid">
            {item.content.map((item, index) => (
              <Link to={`/recipes/${item.subHeading}`} key={index} className="home3">
                  <img src={item.images} alt="images" />
                  <div className="text">{item.subHeading}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {homeData4.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>

          <div className="review-box">
            {item.content.map((item, index) => (
              <Link to={`/recipes/${item.subHeading}`} key={index}>
                <div className="home1" >
                  <img src={item.images} alt="images" />
                  <div className="text-home1">
                    <div id="collection">COLLECTION</div>
                    <div id="subHead">
                      {item.number} {item.subHeading}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {homeData5.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>

          <div className="review-box-grid">
            {item.content.map((item, index) => (
              <Link to={`/recipes/${item.subHeading}`} key={index} className="home3">           
                  <img src={item.images} alt="images" />
                  <div className="text">{item.subHeading}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="bar"></div>

      <div className="layout-item">
        <div className="big-block">
          <div className="block-items-2">
            <img
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/upload/editorial/how-to-peel-peaches/peel-peaches-beauty-1.jpg"
              alt="big"
              className="block-image-2"
            />
            <div className="block-text-2">
              <div style={{ background: "" }}>COLLECTION</div>
              <div className="block-text-title">
                HOW TO PEEL PEACHES, 3 WAYS
              </div>
              <div>
                There’s more than one way to peel a peach! Here are three ways
                to get the job done.
              </div>
            </div>
          </div>
        </div>
      </div>

      {homeData6.map((item, index) => (
        <div className="layout-item" key={index}>
          <div className="heading">
            <h2>{item.heading}</h2>
          </div>

          <div className="review-box-grid">
            {item.content.map((item, index) => (
             <Link to={`/recipes/${item.subHeading}`} className="home3" key={index}>
                <img src={item.images} alt="images" />
                <div className="text">{item.subHeading}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <FindMoreRecipes/>
    </div>
  );
}
