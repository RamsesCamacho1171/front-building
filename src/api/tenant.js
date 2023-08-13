import { BASE_API } from "../utils/constants";

export async function getTenantByUserApi(id) {
    try {
        const url = `${BASE_API}/api/tenant/user/${id}`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
    
}