import { BASE_API } from "../utils/constants";

export async function addVisitApi(num_department,token) {
    const formData = new FormData();
    formData.append("department",num_department.department)
    console.log(formData);
    try {
        const url= `${BASE_API}/api/visit/`
        const params = {
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body:formData,
        }
        const response= await fetch(url,params);
        const result = response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function validateVisitApi(visitToken,token){
    const formData = new FormData();
    formData.append("token",visitToken)
    try {
        const url= `${BASE_API}/api/visit/validate/`
        const params = {
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body:formData,
        }
        const response= await fetch(url,params);
        const result = response.json();
        return result;
    } catch (error) {
        throw error;
    }
}