import React, {useState, useEffect} from 'react';
;


function API() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const MY_KEY= process.env.REACT_APP_API_KEY
  let url= `https://api.spoonacular.com/recipes/random?number=1&apiKey=${MY_KEY}`


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {/* {items.map(item => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))} */}
      </ul>
    );
  }
}

export default API;