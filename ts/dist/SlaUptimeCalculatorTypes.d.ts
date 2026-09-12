export interface Api {
    SLA?: number;
    dailyDown?: string;
    dailyDownSecs?: number;
    monthlyDown?: string;
    monthlyDownSecs?: number;
    nines?: string;
    quarterlyDown?: string;
    quarterlyDownSecs?: number;
    uptimeURL?: string;
    weeklyDown?: string;
    weeklyDownSecs?: number;
    yearlyDown?: string;
    yearlyDownSecs?: number;
}
export interface ApiLoadMatch {
    down?: string;
    dur?: any[];
    sla?: number;
}
