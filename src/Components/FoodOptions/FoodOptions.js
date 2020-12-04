import React, { useState } from 'react';
import './FoodOptions.scss'
import ApiMenuPlan from '../API/ApiMenuPlan';


const dietList = ['vegetarian', 'vegan', 'ketogenic', 'gluten-free', 'pescatarian', 'paleo'];
const allergyList = ['Dairy', 'Egg', 'Peanut', 'Seafood', 'Sesame', 'Soy', 'Treenut', 'wheat'];
const leaveOutList = ['pork', 'cilantro', 'beef', 'eggs', 'tomato', 'peppers'];

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
            <input type="submit" value="Submit" />
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
    return(
    <div>
        <Checkboxes {...checkboxes} />
        <ApiMenuPlan diet={dietChecked} allergies={allergyChecked} leaveOut={leaveOutChecked}/>
    </div>)
  }


export default  FoodOptions;