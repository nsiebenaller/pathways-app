import Axios from "axios";

export async function login(
    email: string,
    password: string
): Promise<ApiResponse> {
    try {
        const { data } = await Axios.post("/api/Login", { email, password });
        return data;
    } catch (err) {
        console.error(err);
        return { success: false, messages: ["An error has occurred."] };
    }
}

export async function check(): Promise<ApiResponse> {
    try {
        const { data } = await Axios.get("/api/Check");
        return data;
    } catch (err) {
        console.error(err);
        return { success: false, messages: ["An error has occurred."] };
    }
}

export async function logout(): Promise<ApiResponse> {
    try {
        const { data } = await Axios.get("/api/Logout");
        return data;
    } catch (err) {
        console.error(err);
        return { success: false, messages: ["An error has occurred."] };
    }
}
