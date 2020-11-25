import React from 'react';
import './FoodOptions.scss'

const FoodOptions = () => {
    // const [selected, useSelected] = useState(false)
    // const [diet, useDiet] = useState([])

    // const handleInputChange = (event) =>{
    //     const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name  =target.name
    // //   useDiet(diet.push(value))
    // }
    // handleSubmit = () =>{

    // };
    
    return (
        <div>
            <form className="foodOptions">
                <div className="diets">
                    <h2> What do you need this recipe to be?</h2>
                    <label>Vegetarian<input type="checkbox" name="vegetarian" value="Vegetarian"></input></label>
                    <label>Vegan<input type="checkbox" name="vegan" value="Vegan"></input></label>
                    <label>Keto<input type="checkbox" name="Ketogenic" value="Ketogenic"></input></label>
                    <label>Gluten-Free<input type="checkbox" name="Gluten-free" value="Gluten-Free"></input></label>
                    <label>Pescatarian<input type="checkbox" name="pescatarian" value="Pescatarian"></input></label>
                    <label>Paleo<input type="checkbox" name="paleo" value="Paleo"></input></label>
                </div>
                {/* <div className="allergies">
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
                </div>
                <div className="likes">
                    <h2>Which ingredients should we leave out?</h2>
                    <label>Tomatoes<input type="checkbox" value="tomato"></input></label>
                    <label>Eggs<input type="checkbox" value="egg"></input></label>
                    <label>Cilantro<input type="checkbox" value="cilantro"></input></label>
                    <label>Pork<input type="checkbox" value="Pork"></input></label>
                    <label>Beef<input type="checkbox" value="Beef"></input></label>
                    <label><input type="checkbox" value=""></input></label>
                </div> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

};


export default FoodOptions;