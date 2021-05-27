import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce y que informacion tendra
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  setFavIcon: (iconName: string) => void;
  setName: (name: string) => void;
  logout: () => void;
}

// Crea el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const setFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const setName = (name: string) => {
    dispatch({type: 'changeName', payload: name});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, setFavIcon, setName, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
