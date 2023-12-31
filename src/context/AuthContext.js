import React, { useState, createContext, useEffect } from 'react'
import { setToken, getToken, removeToken } from "../api/token";
import { useUser,useTenant} from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  tenant:undefined,
  getTenant: () => null,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const [tenant, setTenant] = useState(undefined);
  const {getTenantByUser} = useTenant();
  const { getMe } = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        try {
          const me = await getMe(token);
          setAuth({ token, me });
        } catch (error) {
          setAuth(null);
        }
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = async (token) => {
    setToken(token);
    const me = await getMe(token);
    setAuth({ token, me });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  const getTenant = async (id) =>{
    try {
      const response = await getTenantByUser(id);
      setTenant(response);
    } catch (error) {
      throw error;
    }
  }


  const valueContext = {
    auth,
    tenant,
    getTenant,
    login,
    logout,
  };



  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
