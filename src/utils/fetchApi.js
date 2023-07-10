import { API_ADDRESS } from "../utils/API_ADDRESS";

export async function fetchApi(endpoint, init) {
  const response = await fetch(`${API_ADDRESS}${endpoint}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("TOKEN")}`,
      ...init?.headers,
    },
  });
  const result = await response.json();

  return result;
}
