export const  fetchIdeasData = async() => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API_URI}/ideasAll`);
    const data = await res.json();
    return data
}

export const  fetchTrendingData = async() => {
    const res = await fetch(`${process.env.NEXT_CLIENT_API_URI}/trending`);
    const data = await res.json();
    return data;
}