import { BASE_API } from "../utils/constants";

export async function getigilantByUser(id) {
    try {
        const url = `${BASE_API}/api/vigilant/user/${id}`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
    
}