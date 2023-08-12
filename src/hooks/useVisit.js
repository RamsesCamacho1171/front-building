import { addVisitApi, validateVisitApi } from "../api/visit";
import { useAuth } from "./useAuth";
import { useState } from "react";

export function useVisit(){
    const {auth} = useAuth();
    const [token, setToken] = useState(undefined);

    const addVisit=async(data)=>{
        try {
            const response = await addVisitApi(data,auth?.token);
            setToken(response);
        } catch (error) {
            throw new Error('valio madre')
        }
    }

    const validateVisit=async(token)=>{
        try {
            const response = await validateVisitApi(token,auth?.token);
            setToken(response);
        } catch (error) {
            throw error;
        }
    }

    return {
        token,
        addVisit,
        validateVisit
    }
}