import { type } from "os";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext;

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
    // user: null,

    //fake datas
    user: {
      name: "Sai",
      img_url:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      email: "okok@gmail.com",
      role: "teacher",
    },
  });

  useEffect(() => {
    //get items from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "LOGIN", payload: user });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
