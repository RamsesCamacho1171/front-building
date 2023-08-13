import { getTenantByUserApi } from "../api/tenant";

export function useTenant(){

    const getTenantByUser = async(id)=>{
        try {
            const response = await getTenantByUserApi(id);
            return response
        } catch (error) {
            throw error;
        }
    }

    return {
        getTenantByUser
    }
}