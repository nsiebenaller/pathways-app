export {};
declare global {
    interface ApiResponse {
        success: boolean;
        messages: Array<string>;
    }
    interface Player {
        id: number;
        firstName: string;
        lastName: string;
        preferredName: string;
        data: any;
        createdAt: string;
        updatedAt: string;
    }
}
