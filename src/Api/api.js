const BASE_URL = "https://api.tvmaze.com";

async function fetchData(query) {
  const response = await fetch(`${BASE_URL}${query}`);
  const result = await response.json();

  return result;
}

export const searchForShows = (query) => fetchData(query);
