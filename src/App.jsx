import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { ExchangeProvider } from "./context/ExchangeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import GroupDetails from "./pages/GroupDetails";
import Communities from "./pages/Communities";
import Exchange from "./pages/Exchange";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import CommunityDetails from "./pages/CommunityDetails";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import ProfileDetails from "./pages/ProfileDetails";


const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
    secondary: {
      main: "#8b5cf6",
      light: "#a78bfa",
      dark: "#7c3aed",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ExchangeProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/groups/:groupId" element={<GroupDetails />} />
                  <Route path="/communities" element={<Communities />} />
                  <Route
                    path="/communities/:communityId"
                    element={<CommunityDetails />}
                  />
                  <Route path="/exchange" element={<Exchange />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/profile-details/:id"
                    element={<ProfileDetails />}
                  />
                  <Route path="/checkout/:sessionId" element={<Checkout />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </ExchangeProvider>
    </AuthProvider>
  );
}

export default App;
