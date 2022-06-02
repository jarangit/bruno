import axios from "axios";

export const editOwnerInformation = async (data: object, token: string, buildingID: string) => {

  return axios.patch(`${process.env.NEXT_PUBLIC_APP_URL}buildings/${buildingID}/owner_info`, data, {
    headers: {
      // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
      Authorization: `Bearer ${token}`,
      // withCredentials: true,
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
    },
  })
    .then(res => {
      console.log(res.data);
    })
}