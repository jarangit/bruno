import axios from "axios";

export const baseUrl = "https://api.airin1.com/api/";

export const fecthApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTEzOTAxNTksImV4cCI6MTY1Mzk4MjE1OSwib3RwIjoiIiwidWlkIjo0M30.7CPKEEGsbgz37RkSlC3b2zq1jLkp9gRChaVqvDAqiPk`,
    },
  });

  return data
};
