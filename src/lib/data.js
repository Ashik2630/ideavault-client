import { buildApiUrl } from "@/lib/api";

export const fetchIdeasData = async (search = "", category = "") => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);

    const url = buildApiUrl(`/ideasAll?${params.toString()}`);
    const res = await fetch(url);
    const data = await res.json();
    return data;
};


export const fetchTrendingData = async () => {
    const res = await fetch(buildApiUrl("/trending"));
    const data = await res.json();
    return data;
};



