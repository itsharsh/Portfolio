import React, { createContext, useState, useContext, useEffect } from 'react';

const IntentContext = createContext();

export const useIntent = () => {
  const context = useContext(IntentContext);
  if (!context) {
    throw new Error("useIntent must be used within an IntentProvider");
  }
  return context;
};

export const IntentProvider = ({ children }) => {
  // 'hiring', 'freelance', 'browsing', or null (not selected)
  const [intent, setIntentState] = useState(null);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const savedIntent = localStorage.getItem('portfolio_intent');
    if (savedIntent) {
      setIntentState(savedIntent);
      setHasVisited(true);
    }
  }, []);

  const setIntent = (newIntent) => {
    localStorage.setItem('portfolio_intent', newIntent);
    setIntentState(newIntent);
    setHasVisited(true);
  };

  const clearIntent = () => {
    localStorage.removeItem('portfolio_intent');
    setIntentState(null);
    setHasVisited(false);
  };

  return (
    <IntentContext.Provider value={{ intent, setIntent, hasVisited, clearIntent }}>
      {children}
    </IntentContext.Provider>
  );
};
