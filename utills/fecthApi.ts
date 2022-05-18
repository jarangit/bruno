import axios from "axios";

export const baseUrl = "https://api.airin1.com/api";

export const fecthApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE2ODY2NjUsImV4cCI6MTY1NDI3ODY2NSwib3RwIjoiIiwidWlkIjo0M30.FbnXRRjc_fYPOqqnfcGnIwRgYGax4PNex9duXCJPBIY`,
    },
  });

  return data
};
