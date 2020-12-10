import React, {useState, useEffect} from 'react';
import './API.scss';


function API (props){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1)
 
  const MY_KEY= process.env.REACT_APP_API_KEY
  let apiURL= `https://api.spoonacular.com/recipes/random?number=1&tags=${props.meal}&apiKey=${MY_KEY}`

  useEffect((count) => {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.recipes);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [apiURL, count])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {/* <button onClick={() => setCount(count + 1)}>Try Another</button> */}
        <div>
        {items.map(item => (
            <div className="cardContainer"key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.image} alt="meal"/>
            <a href={item.sourceUrl} target="_blank" rel="noreferrer">Click for Recipe Link</a>
          </div>
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Try Another</button>
      </div>
    );
  }
}


export default API;

