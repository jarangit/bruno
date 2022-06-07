import axios from "axios"

export const createNewTenants = async (params: object, token: string) => {
  return axios.post(`${process.env.NEXT_PUBLIC_APP_URL}tenants`, params, {
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

export const deleteTenantService = async (id: number, token: string) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_APP_URL}tenants/${id}`, {
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

export const getTenant = async (token: string, id: number) => {
  try {
    const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}tenants/${id}`, {
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

export const getTenantByBuildingId = async (token: string, id: any) => {
  try {
    const { data, status } = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants?building_id=${id}`, {
      headers: {
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
        Authorization: `Bearer ${token}`,
        // withCredentials: true,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}