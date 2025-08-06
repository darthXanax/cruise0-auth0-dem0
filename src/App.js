import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f9ff",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#1e40af", margin: "0" }}>🚢 Cruise0</h1>
          <h2 style={{ color: "#374151", fontWeight: "normal" }}>
            Welcome Aboard!
          </h2>
          <p style={{ color: "#6b7280" }}>
            Log in to book your travel with Cruise0
          </p>
        </div>

        {!isAuthenticated ? (
          <div style={{ textAlign: "center" }}>
            <LoginButton />
          </div>
        ) : (
          <div>
            <Profile />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
