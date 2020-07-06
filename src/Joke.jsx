import React, { useState, useEffect } from "react";

const Joke = () => {
  const [error, setError] = useState(false);
  const [joke, setJoke] = useState({});
  const fetchData = async () => {
    setError(false);
    try {
      await fetch("https://official-joke-api.appspot.com/random_jokei")
        .then((response) => response.json())
        .then((joke) => {
          setJoke(joke);
        });
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>setup: {joke.setup}</h1>
      <h1>punchline: {joke.punchline}</h1>
      <span>{error ? `HasError: ${JSON.stringify(error)}` : ""}</span>
    </div>
  );
};
export default Joke;
