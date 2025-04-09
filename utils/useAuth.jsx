import { useState } from "react";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return { isLoggedIn, setIsLoggedIn };
};

export default useAuth;