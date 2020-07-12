import React, { useState, useEffect } from "react";

const Joke = () => {
  const [error, setError] = useState(false);
  const [getResource, setGetResource] = useState(0);
  const [joke, setJoke] = useState({});

  // const fetchData = async () => {
  //   setError(false);
  //   try {
  //     await fetch(`https://official-joke-api.appspot.com/random_joke`)
  //       .then((response) => response.json())
  //       .then((joke) => {
  //         console.log(joke);
  //         setJoke(joke);
  //       });
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  useEffect(() => {
    try {
      fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then((response) => response.json())
        .then((joke) => {
          console.log(joke);
          setJoke(joke);
        });
    } catch (error) {
      setError(true);
    }
  }, [getResource]);

  return (
    <div>
      <button onClick={() => setGetResource(Math.random() * 10)}>
        New Joke
      </button>
      <h1>setup: {joke.setup}</h1>
      <h1>punchline: {joke.punchline}</h1>
      <span>{error ? `HasError: ${JSON.stringify(error)}` : ""}</span>
    </div>
  );
};
export default Joke;
