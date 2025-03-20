// filepath: /Users/rakko/UserDocuments/Studies/University/Year3/Semester2/DES422_BusinessApplicationDevelopment/TestProject/frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    // if (!apiUrl) {
    //   console.error("VITE_API_URL is not defined");
    //   return;
    // }

    fetch(`test-app-init-backend-production.up.railway.app/users`) // Call FastAPI, NOT Supabase directly
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;