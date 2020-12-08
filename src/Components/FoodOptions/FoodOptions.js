import React, { useState } from 'react';
import './FoodOptions.scss'
import ApiMenuPlan from '../API/ApiMenuPlan';


const dietList = ['Vegetarian', 'Vegan', 'Ketogenic', 'Gluten-free', 'Pescatarian', 'Paleo'];
const allergyList = ['Dairy', 'Egg', 'Peanut', 'Seafood', 'Sesame', 'Soy', 'Treenut', 'Wheat'];
const leaveOutList = ['Pork', 'Cilantro', 'Beef', 'Eggs', 'Tomato', 'Peppers'];

const getCheckedBoxes = (list) => 
    list.map(checkbox => ({
        name: checkbox,
        checked: false,
    }));

export function useCheckboxes() {
    const [diet, setDiet] = useState(
        getCheckedBoxes(dietList)
    );
    const [allergies, setAllergies] = useState(
        getCheckedBoxes(allergyList)
    )
    const [leaveOut, setLeaveOut] = useState(
        getCheckedBoxes(leaveOutList)
    )
    function setADiet(index, checked) {
        const newDiets = [...diet];
        newDiets[index].checked = checked;
        setDiet(newDiets);
    }

    function setAllergy(index, checked) {
        const newAllergies = [...allergies];
        newAllergies[index].checked = checked;
        setAllergies(newAllergies);
    }
    function setToLeaveOut(index, checked){
        const newLeaveOut = [...leaveOut];
        newLeaveOut[index].checked = checked;
        setLeaveOut(newLeaveOut);
    }

    return {
        setToLeaveOut,
        leaveOut,
        setADiet,
        diet,
        setAllergy,
        allergies,
    };
   
}

export function Checkboxes({ allergies, setAllergy, diet, setADiet, leaveOut, setToLeaveOut }) {

return (
    <div>
        <form className="foodOptions">
        <div>
            <h3>Special Diets do we Need to Obey?</h3>
            {diet.map((diet, i) =>
                <label key={diet.name}>
                    <input
                        type="checkbox"
                        checked={diet.checked}
                        onChange={e => {
                        setADiet(i, e.target.checked);
                        }}
                    />
                    {diet.name}
                </label>
            )}
           </div>
           <h3>Any Allergies in the Bunch?</h3>
           <div>
            {allergies.map((allergy, i) =>
                <label key={allergy.name}>
                    <input
                        type="checkbox"
                        checked={allergy.checked}
                        onChange={e => {
                        setAllergy(i, e.target.checked);
                        }}
                    />
                    {allergy.name}
                </label>
            )}
           </div>
           <div>
           <h3>What Should We Leave Out of This Recipe?</h3>
            {leaveOut.map((leave, i) =>
                <label key={leave.name}>
                    <input
                        type="checkbox"
                        checked={leave.checked}
                        onChange={e => {
                        setToLeaveOut(i, e.target.checked);
                        }}
                    />
                    {leave.name}
                </label>
            )}
           </div>
        </form>
    </div>
);

}

const FoodOptions = () => {
   const checkboxes = useCheckboxes();
   let dietChecked = checkboxes.diet
   .filter(t => t.checked)
   .map(checkbox => checkbox.name)
   .join(', ')
   let allergyChecked = checkboxes.allergies
   .filter(t => t.checked)
   .map(checkbox => checkbox.name)
   .join(', ')
   let leaveOutChecked = checkboxes.leaveOut
   .filter(t => t.checked)
   .map(checkbox => checkbox.name)
   .join(', ')

   let checked = dietChecked + allergyChecked + leaveOutChecked
    return(
    <div>
        <Checkboxes {...checkboxes} />
        { checked && <ApiMenuPlan diet={dietChecked} allergies={allergyChecked} leaveOut={leaveOutChecked}/>}
    </div>)
  }


export default  FoodOptions;