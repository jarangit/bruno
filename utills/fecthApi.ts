import axios from "axios";
export const baseUrl = "https://api.airin1.com/api";
export const fetchApi = async (url: string, token: string) => {
  try {
    const { data, status } = await axios.get(url, {
      headers: {
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
        Authorization: `Bearer ${token}`,
        // withCredentials: true,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
