import axios from "axios";

export const getAitList = async (token: string, buildingId: any) => {
  try {
    const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}devices?building_id=${buildingId}`, {
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
}