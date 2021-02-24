import Axios from "axios";

export async function getPlayers(
    limit: number,
    offset: number
): Promise<Array<Player>> {
    const { data } = await Axios.get("/api/Player", {
        params: { limit, offset },
    });
    return data;
}

export async function uploadFile(file: File): Promise<ApiResponse> {
    try {
        const formData = new FormData();
        formData.append("csv", file);
        const { data } = await Axios.post("/api/Upload", formData);
        return data;
    } catch (err) {
        console.error(err);
        return { success: false, messages: ["An error has occurred"] };
    }
}
