// filepath: /Users/rakko/UserDocuments/Studies/University/Year3/Semester2/DES422_BusinessApplicationDevelopment/TestProject/frontend/src/App.js
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState("test");

  useEffect(() => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    // if (!apiUrl) {
    //   console.error("VITE_API_URL is not defined");
    //   return;
    // }

    // fetch(`test-app-init-backend-production.up.railway.app/users`) // Call FastAPI, NOT Supabase directly
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`HTTP error! status: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data && data.data) {
    //       setUsers(data.data);
    //     } else {
    //       console.error("Invalid API response:", data);
    //     }
    //   })
    //   .catch((error) => console.error("Error fetching users:", error));

      fetch(`https://test-app-init-backend-production.up.railway.app/users`) // Call FastAPI, NOT Supabase directly
      .then((res) => {
        console.table(res)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data[0].name);
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