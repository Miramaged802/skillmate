import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, MoveRight } from "lucide-react";
import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 flex items-center justify-center p-4",
    },
    React.createElement(
      "div",
      { className: "text-center" },
      // Animated 404
      React.createElement(
        "div",
        {
          className:
            "relative text-9xl font-bold mb-8 transition-transform duration-300",
          style: {
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
        "404"
      ),
      // Message
      React.createElement(
        "h1",
        { className: "text-3xl font-bold mb-4 text-gray-800" },
        "Oops! Page Not Found"
      ),
      React.createElement(
        "p",
        { className: "text-gray-600 mb-8 max-w-md mx-auto" },
        "Looks like you've ventured into uncharted territory. Don't worry, even the best explorers get lost sometimes!"
      ),
      // Interactive Buttons
      React.createElement(
        "div",
        { className: "space-y-4" },
        React.createElement(
          Button,
          {
            variant: "contained",
            size: "large",
            startIcon: React.createElement(Home, { className: "w-5 h-5" }),
            endIcon: React.createElement(MoveRight, { className: "w-5 h-5" }),
            onClick: () => navigate("/"),
            onMouseEnter: () => setIsHovering(true),
            onMouseLeave: () => setIsHovering(false),
            className: `
            bg-gradient-to-r from-blue-600 to-violet-600 
            hover:from-blue-700 hover:to-violet-700 
            transform transition-all duration-300
            ${isHovering ? "scale-105" : "scale-100"}
          `,
          },
          "Return to Home"
        )
      ),
      // Decorative Elements
      React.createElement(
        "div",
        {
          className:
            "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10",
        },
        React.createElement("div", {
          className:
            "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob",
        }),
        React.createElement("div", {
          className:
            "absolute top-1/3 right-1/4 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000",
        }),
        React.createElement("div", {
          className:
            "absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000",
        })
      )
    )
  );
};

export default NotFound;
