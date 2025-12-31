import { BACKEND_BASE_URL } from "../config/config";

export async function sendPostReq(route,data) {
    try {
    const response = await fetch(BACKEND_BASE_URL+route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const res = await response.json();
    console.log(res);
    return res
  } catch (error) {
    console.error(error);
    throw new Error("Failed "+ error)
  }
}