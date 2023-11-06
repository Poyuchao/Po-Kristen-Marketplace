import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();


export function UserProvider({ children }) {
  // Initialize userData from local storage when the app loads
  const [userData, setUserData] = useState(() => {
    // Try to retrieve 'userData' from local storage
    const storedUserData = localStorage.getItem('userData');
    // If 'userData' exists in local storage, parse it as JSON; otherwise, set it to null
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  // Update local storage when userData changes
  useEffect(() => {
    // When userData changes, update the 'userData' item in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Local Storage Updated:', userData); // Log the updated userData
  }, [userData]);

  console.log('User Provider Rendered:', userData); // Log whenever the UserProvider component is rendered

  //logout
  const logout = () => {
    setUserData(null);
    try {
      localStorage.removeItem('userData');
    } catch (error) {
      console.error('Error clearing user data from local storage:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
