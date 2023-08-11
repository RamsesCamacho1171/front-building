import React, {useState, createContext} from 'react'


export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
  });

export function AuthContext(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);

    return (
        <div>
        
        </div>
    )
}
