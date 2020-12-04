import React, {useState, useEffect} from 'react';
import './API.scss';


function APIMenu (props){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
 
  const MY_KEY= process.env.REACT_APP_API_KEY
  let apiURL= `https://api.spoonacular.com/recipes/complexSearch?diet=${props.diet}?intolerances=${props.allergies}?${props.leaveOut}&number=1&sort=random&addRecipeInformation=true&apiKey=${MY_KEY}`
  console.log(apiURL)
  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (results) => {
          setIsLoaded(true);
          setItems(results.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [apiURL])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
        {items.map(item => (
            <div className="cardContainer" key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title}/>
            <a href={item.sourceUrl} target="_blank" rel="noreferrer">Click for Recipe Link</a>
          </div>
        ))}
      </div>
      </div>
    );
  }
}


export default APIMenu;

