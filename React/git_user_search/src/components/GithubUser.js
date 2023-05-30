import { useEffect, useState } from "react";

const User = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [resultItems, setresultItems] = useState([]);
  const API_URL = "https://api.github.com";
  const onSearch = (event) => {
    event.preventDefault();
    setQuery(inputValue);
    setInputValue("");
  };
  // querying for user
  useEffect(() => {
    if (query === "") return;
    const fetchResultsAndSetState = async () => {
      try {
        const results = await fetchResults(query);
        setresultItems(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResultsAndSetState();
  }, [query]);

  const fetchResults = async (query) => {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      const items = json.items;
      return items;
    } catch (e) {
      throw new Error(e);
    }
  };

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Search a user</h1>
      <form onSubmit={onSearch}>
        <input value={inputValue} onChange={changeHandler}></input>
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>Results:</h2>
        {resultItems.map((e) => {
          return (
            <div>
              <h3>{e.login}</h3>
              <img src={e.avatar_url} alt=""></img>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default User;
