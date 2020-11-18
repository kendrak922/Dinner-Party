import React from 'react';
import './FoodOptions.scss'

const FoodOptions = () => {
    return (
        <div>
            <form>
             <h2> What do you need this recipe to be?</h2>
          <label>Vegetarian<input type="checkbox" value="Vegetarian"></input></label>
                <label>Vegan<input type="checkbox" value="Vegan"></input></label>
                <label>Keto<input type="checkbox" value="Ketogenic"></input></label>
                <label>Gluten-Free<input type="checkbox" value="Gluten-Free"></input></label>
                <label>Pescatarian<input type="checkbox" value="Pescatarian"></input></label>
                <label>Paleo<input type="checkbox" value="Paleo"></input></label>
               <h2> Any allergies in the bunch?</h2>
          <label>Dairy<input type="checkbox" value="Dairy"></input></label>
                <label>Egg<input type="checkbox" value="Egg"></input></label>
                <label>Gluten<input type="checkbox" value="Gluten"></input></label>
                <label>Peanut<input type="checkbox" value="Peanut"></input></label>
                <label>Seafood<input type="checkbox" value="Seafood"></input></label>
                <label>Sesame<input type="checkbox" value="Sesame"></input></label>
                <label>Seafood<input type="checkbox" value="Soy"></input></label>
                <label>Tree Nut<input type="checkbox" value="Tree Nut"></input></label>
                <label>Wheat<input type="checkbox" value="wheat"></input></label>
               <h2>Food they don't Like?</h2>
          <label>Tomatoes<input type="checkbox" value="tomato"></input></label>
                <label>Eggs<input type="checkbox" value="egg"></input></label>
                <label>Cilantro<input type="checkbox" value="cilantro"></input></label>
                <label><input type="checkbox" value=""></input></label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};


export default FoodOptions;