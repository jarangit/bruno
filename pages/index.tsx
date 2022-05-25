import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";
import { useEffect, useState } from "react";
import Monitor from "../components/dashborad/monitor";
import UserList from "../components/form/userList";
import { baseUrl, fetchApi } from "../utills/fecthApi";
import { buildingAsync } from "../redux/slice/buildingSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buildingListAsync } from "../redux/slice/buildingListSlice";
import { GetServerSideProps } from 'next'
import cookie from "cookie";
import { keepData } from "../redux/slice/allBuildingsSlice"
import SelectBuilding from "../components/building/selectBuilding";
import Loading from "../components/loading/loading";
type Props = {
  allDataBuildings: any;
  dataList: []
}
interface Building {
  weather_outsides: Array<any>;
  latitude: string;
  longitude: string;
  children: Array<any>;
}
const Home = ({ }: Props) => {

  const router = useRouter()
  const [userToken, setuserToken] = useState<string>()
  const [buildingData, setBuildingData] = useState<Building>()
  const [buildingDataList, setBuildingDataList] = useState([])
  const buildings = useSelector((state: any) => state.building)
  const buildingsList = useSelector((state: any) => state.buildingList)
  const allData = useSelector((state: any) => state.allBuildings)
  const dispatch = useDispatch()
  const buildingID = allData.currentBuilding


  const getAllBuildings = async (token: any) => {
    const allDataBuildings = await fetchApi(`https://api.airin1.com/api/buildings`, token)
    dispatch(keepData(allDataBuildings))
  }


  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      getAllBuildings(token)
      setuserToken(token)
      dispatch(buildingAsync(buildingID))
      dispatch(buildingListAsync(buildingID))

      if (buildings && buildingsList) {
        setBuildingData(buildings.data)
        setBuildingDataList(buildingsList.data)
      }
    } else {
      router.push('/signin')
      return
    }
  }, [buildingDataList, buildingData, allData.currentBuilding])
  console.log(buildingID);

  return (
    <div>
      <Head>
        <title>Bruno</title>
        <meta name="description" content="Bruno app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {buildingID ? (
        <>
          {buildings.data && buildingsList.data?.length >= 0 ? (
            <Monitor
              temperature={buildings.data.weather_outsides[0]?.temperature}
              lat={buildings.data.latitude}
              lng={buildings.data.longitude}
              weather_outsides={buildings.data.weather_outsides[0]?.weather_category}
              total_user={buildings.data.children.length}
              total_floor={buildingsList.data.length}
            />
          ) : <Loading/>}

          {buildingsList.data ? (
            <UserList data={buildingsList.data} />
          ) : null}
        </>
      ) : (
        <SelectBuilding />
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const myCookie = cookie.parse(
    (req && req.headers.cookie) || ""
  );
  const token = myCookie.token

  const allDataBuildings = await fetchApi(`https://api.airin1.com/api/buildings`, token)
  // const listBuilding = await fecthApi(`https://api.airin1.com/api/tenants?building_id=38`)

  return { props: { allDataBuildings: allDataBuildings || '' } }
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


