import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Search, Menu, X, Home, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Added state for dropdown
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => { // Defined toggleDropdown function
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => { // Defined closeDropdown function
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (isAuthPage) {
    return null;
  }

  return (
    <AppBar
      position="sticky"
      className="bg-white shadow-sm border-b border-gray-100"
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <Toolbar className="justify-between py-2">
        <div className="flex items-center gap-2">
          {!isLargeScreen && (
            <IconButton
              className="lg:hidden text-gray-700 hover:bg-gray-100"
              edge="start"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </IconButton>
          )}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700 transition-all duration-300"
          >
            SkillMate
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/groups"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Groups
          </Link>
          <Link
            to="/communities"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Communities
          </Link>
          <Link
            to="/exchange"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            Skill Exchange
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="relative">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2" onClick={toggleDropdown}>
                  <User className="h-5 w-5" />
                  <span>{user.fullName || "Menu"}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          className="lg:hidden"
        >
          <div className="w-72 p-4">
            <div className="flex justify-between items-center mb-6">
              <Link
                to="/"
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                onClick={toggleMobileMenu}
              >
                SkillMate
              </Link>
              <IconButton onClick={toggleMobileMenu} className="text-gray-700">
                <X className="h-6 w-6" />
              </IconButton>
            </div>
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                onClick={toggleMobileMenu}
                className="rounded-lg mb-2 hover:bg-gray-100"
              >
                <ListItemText
                  primary={
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </div>
                  }
                  className="text-gray-700"
                />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/groups"
                onClick={toggleMobileMenu}
                className="rounded-lg mb-2 hover:bg-gray-100"
              >
                <ListItemText primary="Groups" className="text-gray-700" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/communities"
                onClick={toggleMobileMenu}
                className="rounded-lg mb-2 hover:bg-gray-100"
              >
                <ListItemText primary="Communities" className="text-gray-700" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/exchange"
                onClick={toggleMobileMenu}
                className="rounded-lg mb-2 hover:bg-gray-100"
              >
                <ListItemText
                  primary="Skill Exchange"
                  className="text-gray-700"
                />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/dashboard"
                onClick={toggleMobileMenu}
                className="rounded-lg mb-2 hover:bg-gray-100"
              >
                <ListItemText primary="Dashboard" className="text-gray-700" />
              </ListItem>
            </List>
            <div className="mt-6 space-y-4">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={toggleMobileMenu}>
                    <Button
                      variant="outlined"
                      fullWidth
                      className="text-blue-600 border-blue-600 hover:bg-blue-50 flex items-center gap-2"
                    >
                      <User className="h-5 w-5" />
                      <span>{user.fullName || "Profile"}</span>
                    </Button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
