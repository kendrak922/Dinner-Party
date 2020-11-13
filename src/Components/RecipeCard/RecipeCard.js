import React from 'react';
import './RecipeCard.scss'


const RecipeCard = props => {
return(
    <div className="cardContainer">
    <h1>Title of Recipe</h1>
    <img src="https://loremflickr.com/200/200" alt="meal"/>
    <p>Here is a desciption of some really tasty food</p>
    <p>ingredients</p>
    <p>link</p>
    </div>
)
}

export default RecipeCard;