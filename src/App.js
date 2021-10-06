import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.github.com/users");
      setUsersList(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {
        <ul>
          {usersList.map(user => {
            return <li>{user.login}</li>;
          })}
        </ul>
      }
    </div>
  );
}

export default App;
