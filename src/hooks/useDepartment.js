import { useState } from "react";
import { getDepartmentByUserIdApi } from "../api/department";

export function useDepartment() {
    const [department, setDepartment] = useState(undefined);
    const [loadingDepartment, setLoadingDepartment] = useState(false)

    const getDepartmentByUserId=async(id)=>{
        try {
            setLoadingDepartment(true)
            const response = await getDepartmentByUserIdApi(id);
            setDepartment(response)
            setLoadingDepartment(false)
        } catch (error) {
            setLoadingDepartment(false)
            throw error;
           
        }
    }
    return {
        department,
        loadingDepartment,
        getDepartmentByUserId
    }
}