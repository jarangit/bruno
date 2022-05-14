import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";
import { useEffect, useState } from "react";
import Monitor from "../components/dashborad/monitor";
import UserList from "../components/form/userList";
import { baseUrl, fecthApi } from "../utills/fecthApi";
import { buildingAsync } from "../redux/slice/buildingSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buildingListAsync } from "../redux/slice/buildingListSlice";
type Props = {
  data: {
    weather_outsides: Array<any>;
    latitude: string;
    longitude: string;
    children: Array<any>;
  };
  dataList: []
}
interface Building {
  weather_outsides: Array<any>;
  latitude: string;
  longitude: string;
  children: Array<any>;
}
const Home = ({ data, dataList }: Props) => {
  const router = useRouter()
  const [userToken, setuserToken] = useState<string>()
  const [buildingData, setBuildingData] = useState<Building>()
  const [buildingDataList, setBuildingDataList] = useState([])
  const buildings = useSelector((state: any) => state.building)
  const buildingsList = useSelector((state: any) => state.buildingList)
  const dispatch = useDispatch()
  // const dataBuilding = dispatch(buildingAsync("38"))
  // console.log(buildings);
  console.log(buildingData);
  console.log(dataList);

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setuserToken(token)
      dispatch(buildingAsync(38))
      dispatch(buildingListAsync(38))
      if (buildings && buildingsList) {
        setBuildingData(buildings.data)
        setBuildingDataList(buildingsList.data)
      }
    } else {
      router.push('/signin')
      return
    }
  }, [buildingDataList, buildingData])

  return (
    <div>
      <Head>
        <title>Bruno</title>
        <meta name="description" content="Bruno app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {buildings.data ? (
        <Monitor
          temperature={buildings.data.weather_outsides[0]?.temperature}
          lat={buildings.data.latitude}
          lng={buildings.data.longitude}
          weather_outsides={buildings.data.weather_outsides[0]?.weather_category}
          total_user={buildings.data.children.length}
          total_floor={buildingsList.data.length}
        />
      ) : null}

      {buildingsList.data ? (
        <UserList data={buildingsList.data} />
      ) : null}
    </div>
  );
};
export async function getStaticProps() {
  // const dispatch = useAppDispatch()

  // Fetch data from external API
  const dataBuilding = await fecthApi(`https://api.airin1.com/api/buildings/38`)
  const listBuilding = await fecthApi(`https://api.airin1.com/api/tenants?building_id=38`)
  // const dataBuilding = dispatch(buildingAsync("38"))

  // Pass data to the page via props
  return { props: { data: dataBuilding, dataList: listBuilding } }
}


// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
//   console.log('store state on the server before dispatch', store.getState());
//   store.dispatch(buildingAsync(38));
//   console.log('store state on the server after dispatch', store.getState());

//   const data = query.data;
//   //  http://localhost:3000?data='some-data'
//   console.log(data);

//   return {
//     props: {
//       data
//     } // will be passed to the page component as props
//   };
// });

// export const getInitialProps = wrapper.getInitialPageProps((store) => async ({ query }) => {
//   const data = await store.dispatch(buildingAsync(38)) || "no data";
//   console.log(data);
//   const num = 123
//   return {
//     props: {
//       data
//     }
//   };
// })




export default Home;
