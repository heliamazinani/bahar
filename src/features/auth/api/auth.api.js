import apiClient from "../../../shared/api/client";
const authAPI = {
  register: async (data) => {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  },
  login: async (data) => {
    console.log("login req body",data);
    
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  },
};

export default authAPI