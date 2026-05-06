import { useState } from "react";

import ListPage from "./pages/ListPage";
import ManageRoles from "./pages/ManageRoles";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import SearchFilter from "./pages/SearchFilter";
import AiPanel from "./pages/AiPanel";
import FileUploadExport from "./pages/FileUploadExport";
import Analytics from "./pages/Analytics";
import ResponsiveDashboard from "./pages/ResponsiveDashboard";
import FinalDashboard from "./pages/FinalDashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("final");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "list":
        return <ListPage />;

      case "manage":
        return <ManageRoles />;

      case "login":
        return isLoggedIn ? (
          <ManageRoles />
        ) : (
          <LoginPage onLogin={() => setIsLoggedIn(true)} />
        );

      case "dashboard":
        return <Dashboard />;

      case "search":
        return <SearchFilter />;

      case "ai":
        return <AiPanel />;

      case "upload":
        return <FileUploadExport />;

      case "analytics":
        return <Analytics />;

      case "responsive":
        return <ResponsiveDashboard />;

      case "final":
        return <FinalDashboard />;

      default:
        return <FinalDashboard />;
    }
  };

  return (
    <div>
      <div
        style={{
          padding: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          backgroundColor: "#f0f0f0",
        }}
      >
        <button onClick={() => setCurrentPage("list")}>
          Day 3
        </button>

        <button onClick={() => setCurrentPage("manage")}>
          Day 4
        </button>

        <button onClick={() => setCurrentPage("login")}>
          Day 5
        </button>

        <button onClick={() => setCurrentPage("dashboard")}>
          Day 6
        </button>

        <button onClick={() => setCurrentPage("search")}>
          Day 7
        </button>

        <button onClick={() => setCurrentPage("ai")}>
          Day 8
        </button>

        <button onClick={() => setCurrentPage("upload")}>
          Day 9
        </button>

        <button onClick={() => setCurrentPage("analytics")}>
          Day 10
        </button>

        <button onClick={() => setCurrentPage("responsive")}>
          Day 11
        </button>

        <button onClick={() => setCurrentPage("final")}>
          Day 12
        </button>
      </div>

      <div>{renderPage()}</div>
    </div>
  );
}

export default App;