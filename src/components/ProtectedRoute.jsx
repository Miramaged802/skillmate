import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <span className="ml-3 text-blue-600 font-medium">
            جاري التحميل... | Loading...
          </span>
        </div>
        <style jsx>{`
          .loader {
            width: 40px;
            height: 26px;
            --c: no-repeat linear-gradient(#3b82f6 0 0);
            background: var(--c) 0 100%, var(--c) 50% 100%, var(--c) 100% 100%;
            background-size: 8px calc(100% - 4px);
            position: relative;
            margin-right: 10px;
          }
          .loader:before {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: linear-gradient(to right, #3b82f6, #8b5cf6);
            left: 0;
            top: 0;
            animation: l3-1 1.5s linear infinite alternate,
              l3-2 0.75s cubic-bezier(0, 200, 0.8, 200) infinite;
          }
          @keyframes l3-1 {
            100% {
              left: calc(100% - 8px);
            }
          }
          @keyframes l3-2 {
            100% {
              top: -0.1px;
            }
          }
        `}</style>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
