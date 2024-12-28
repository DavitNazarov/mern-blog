import AppRouters from "@/router/AppRouters";
import MainNavigation from "@/shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/authContext";
import { useCallback, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, logIn: login, logout: logout }}
    >
      <MainNavigation />
      <main>
        <AppRouters checkValidity={isLoggedIn} />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
