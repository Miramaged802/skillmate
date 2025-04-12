import React, { createContext, useState } from "react";

export const ExchangeContext = createContext();

export const ExchangeProvider = ({ children }) => {
  const [exchangeSessions, setExchangeSessions] = useState([
    {
      id: "1",
      title: "Python Development Mastery",
      instructor: "Alex Chen",
      rating: 4.8,
      reviews: 124,
      duration: "1 hour",
      price: 50,
      tags: ["Programming", "Python", "Backend"],
      category: "programming",
    },
    // ... other sessions (unchanged)
    {
      id: "14",
      title: "Social Media Branding",
      instructor: "Josh Lee",
      rating: 4.6,
      reviews: 87,
      duration: "1 hour",
      price: 40,
      tags: ["Marketing", "Branding", "Instagram"],
      category: "marketing",
    },
  ]);

  const [orders, setOrders] = useState([]); // New state for orders

  const addSession = (session) => {
    setExchangeSessions([
      ...exchangeSessions,
      { ...session, id: `${exchangeSessions.length + 1}` },
    ]);
  };

  const addOrder = (order) => {
    setOrders([...orders, { ...order, dateBooked: new Date().toISOString() }]);
  };

  return (
    <ExchangeContext.Provider
      value={{ exchangeSessions, addSession, orders, addOrder }}
    >
      {children}
    </ExchangeContext.Provider>
  );
};
