export const  fetchIdeasData = async(search = "") => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/ideasAll?search=${search}`);
    const data = await res.json();
    return data
}

export const  fetchTrendingData = async() => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/trending`);
    const data = await res.json();
    return data;
}



