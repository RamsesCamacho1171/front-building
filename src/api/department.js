import { BASE_API } from "../utils/constants";

export async function getDepartmentByUserIdApi(id) {
    try {
        const url = `${BASE_API}/api/department/inquilino/${id}`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        throw error;
    }
}