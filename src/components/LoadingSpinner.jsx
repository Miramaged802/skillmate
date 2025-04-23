import React from "react";

const LoadingSpinner = () => {
  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 flex items-center justify-center",
    },
    React.createElement(
      "div",
      { className: "relative" },
      // Outer ring
      React.createElement("div", {
        className:
          "w-24 h-24 border-4 border-blue-200 rounded-full animate-pulse",
      }),
      // Inner spinner
      React.createElement("div", {
        className:
          "absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-white rounded-full animate-spin",
      }),
      // Center logo pulse
      React.createElement(
        "div",
        {
          className:
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        },
        React.createElement("div", {
          className: "w-8 h-8 bg-white rounded-full animate-ping opacity-75",
        })
      ),
      // Loading text
      React.createElement(
        "div",
        {
          className:
            "absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white font-medium tracking-wider",
        },
        React.createElement(
          "span",
          { className: "inline-block animate-pulse" },
          "Loading..."
        )
      )
    )
  );
};

export default LoadingSpinner;
