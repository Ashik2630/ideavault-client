export const fetchIdeasData = async (search = "", category = "") => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);

    const url = `${process.env.NEXT_SERVER_URL}/ideasAll?${params.toString()}`;
    // console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    return data;
};


export const fetchTrendingData = async () => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/trending`);
    const data = await res.json();
    return data;
};



