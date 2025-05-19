import { createContext, useEffect, useReducer, useState } from "react";

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

  const [loading, setLoaing] = useState(true);

  useEffect(() => {
    //get items from localStorage
    const user = JSON.parse(localStorage.getItem("aihub_user"));

    dispatch({ type: "LOGIN", payload: user });
    setLoaing(false);
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, loading, setLoaing }}>
      {children}
    </AuthContext.Provider>
  );
};
