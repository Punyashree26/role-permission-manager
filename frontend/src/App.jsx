import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ManageRoles from "./pages/ManageRoles";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <ManageRoles />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;