// Global types shared across the application
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'moderator';
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface PaginationParams {
    page: number;
    limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
