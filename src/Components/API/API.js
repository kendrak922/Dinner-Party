import React, {useState, useEffect} from 'react';


function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const MY_KEY= process.env.REACT_APP_API_KEY
  let apiURL= `https://api.spoonacular.com/recipes/random?number=4&apiKey=${MY_KEY}`

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.recipes);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
      <ul>
        {items.map(item => (
          <li key={item.title}>
         {item.title}
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default API;