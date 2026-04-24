import type { loginGet, loginPost, signUpGet, signUpPost } from "../lib/types";
import api from "./api";


export const loginService = async (data: loginPost): Promise<loginGet> => {
  try {
    const response = await api.post("/auth/signin", data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const signUpService = async (data:signUpPost): Promise<signUpGet> => {
  try {
    const response = await api.post("/auth/signup", data);
    return response.data;
  } catch (error) {
    console.error("Sign up failed:", error);
    throw error;
  }
};

export const EditProductService = async (id: string, data: FormData) => {
  try {
    const response = await api.put(`/products/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Product update failed:", error);
    throw error;
  }
};

