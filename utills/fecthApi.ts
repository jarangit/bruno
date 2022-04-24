import axios from "axios";

export const baseUrl = "https://api.airin1.com/api/";

export const fecthApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDg0NTU2MjcsImV4cCI6MTY1MTA0NzYyNywib3RwIjoiIiwidWlkIjo0M30.8UVfTKIS0l5c0lpjeIBItMeVW-bxV5tr17_wzhCW0tA `,
    },
  });

  return data
};
