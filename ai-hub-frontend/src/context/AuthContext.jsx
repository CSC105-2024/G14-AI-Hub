import { useInterceptor } from "@/hooks/useInterceptor";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

//reducer
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useInterceptor(dispatch);

  useEffect(() => {
    //get items from localStorage
    const user = JSON.parse(localStorage.getItem("aihub_user"));

    dispatch({ type: "LOGIN", payload: user });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
