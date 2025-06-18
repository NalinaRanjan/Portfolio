import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext(null);

// Create the UserProvider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
