import React, { useEffect, useState } from "react";

export default function Counter() {
  let URL = "https://official-joke-api.appspot.com/jokes/random";
  const getJokes = async () => {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let respose = await fetch(URL);
      let jsonResponse = await respose.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  let [joke, setJoke] = useState(getJokes);

  return (
    <div>
      <h1>Joke</h1>
      <h3>{joke.punchline}</h3>
      <h3>{joke.setup}</h3>
      <button onClick={getJokes}>Get New Jokes</button>
    </div>
  );
}
