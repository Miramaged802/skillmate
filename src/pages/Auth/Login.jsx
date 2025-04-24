import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if user just registered
    const justRegistered = location.search.includes("registered=true");
    if (justRegistered) {
      setShowSuccess(true);
      // Get registration data
      const registrationData = JSON.parse(
        localStorage.getItem("registrationData") || "{}"
      );
      setEmail(registrationData.email || "");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get stored registration data
      const registrationData = JSON.parse(
        localStorage.getItem("registrationData") || "{}"
      );

      // Validate credentials (in a real app, this would be done by the backend)
      if (
        email === registrationData.email &&
        password === registrationData.password
      ) {
        const userData = {
          fullName: registrationData.fullName,
          email: registrationData.email,
          isLoggedIn: true,
        };

        await login(userData);
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {showSuccess && (
          <Alert severity="success" className="mb-6">
            Registration successful!
            You can now login.
          </Alert>
        )}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            SkillMate
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Welcome back!
          </h2>
          <p className="mt-2 text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <TextField
              fullWidth
              label="Email address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            endIcon={<ArrowRight className="h-5 w-5" />}
          >
            Sign in
          </Button>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account?</span>{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
