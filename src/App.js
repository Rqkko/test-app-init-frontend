// filepath: /Users/rakko/UserDocuments/Studies/University/Year3/Semester2/DES422_BusinessApplicationDevelopment/TestProject/frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState("test");

  useEffect(() => {
    // const apiUrl = process.env.REACT_APP_API_URL;
    const apiUrl = "test-app-init-backend"
    console.log(apiUrl);
    if (!apiUrl) {
      console.error("REACT_APP_API_URL is not defined");
      return;
    }
    else {
      console.log("REACT_APP_API_URL is defined");
    }

    fetch(`${apiUrl}/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.data[0].name)
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users}
    </div>
  );
}

export default App;