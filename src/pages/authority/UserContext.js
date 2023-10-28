import React, { createContext, useContext, useState, useEffect } from 'react';

// creating a new context using createContext(). 
//This context will be used to store and share user authentication data across different components.
const UserContext = createContext();

// You're exporting a function called UserProvider, which will serve as the context provider. 
// This function takes a children prop, which represents the child components that will be wrapped by this provider.
export function UserProvider({ children }) {
  // Initialize userData from local storage when the app loads
  const [userData, setUserData] = useState(() => {

    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  // Update local storage when userData changes
  useEffect(() => {
    // using localStorage.setItem to update the 'userData' item in local storage with the current value of userData. 
    // You're converting userData to a JSON string using JSON.stringify before storing it in local storage.
    localStorage.setItem('userData', JSON.stringify(userData));
    // The useEffect runs whenever userData changes, as specified by the dependency array [userData]. 
    // This ensures that local storage is updated whenever userData is modified.
  }, [userData]);

  return (
    // using UserContext.Provider to provide the userData state and the setUserData function to its children. 
    // This makes userData and setUserData available to any component that uses the useUser hook within the 
    // context of this provider.
    <UserContext.Provider value={{ userData, setUserData }}>
       {/**rendering the child components ({children}) wrapped by the context provider. 
        * This allows all the components within this context provider to access and update the user data. */} 
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
