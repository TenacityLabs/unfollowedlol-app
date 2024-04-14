export interface DashboardProps {
    loading: boolean,
    data:any,
}

export interface UserData {
    username: string;
    avatar_url: string;
    insta_name: string;
}

export interface SocialDashboardProps {
    filteredData: any;
    socialSelected: number;
    data: any;
}