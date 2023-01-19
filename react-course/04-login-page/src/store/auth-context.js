import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
});

export default AuthContext;
