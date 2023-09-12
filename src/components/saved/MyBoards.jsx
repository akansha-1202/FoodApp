import React from 'react'
import './saved.css'
import IWantToMakeSearch from '../search/IWantToMakeSearch'
import { NavLink } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const MyBoards = () => {
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
                <div id='saved-page-my-boards'>
                    <div id='new-board-card'>
                        <BsFillPlusCircleFill id='saved-page-my-boards-plus-icon' />
                        <h3>NEW BOARD</h3>
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
        </>
    )
}

export default MyBoards