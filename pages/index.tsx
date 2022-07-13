import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
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
import { checkTokenExp } from "../utills/checkTokenExp";
import { getFromStorage } from "../utills";
import { getUserListByFloorID } from "../redux/slice/userListByFloorID";
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
  const [tokenExp, setTokenExp] = useState(true)
  const router = useRouter()
  const [userToken, setUserToken] = useState<string>()
  const [buildingData, setBuildingData] = useState<Building>()
  const [buildingDataList, setBuildingDataList] = useState([])
  const [currentBuildingID, setCurrentBuildingID] = useState<number>()
  const buildings = useSelector((state: any) => state.building)
  const buildingsList = useSelector((state: any) => state.buildingList)
  const allData = useSelector((state: any) => state.allBuildings)
  const userListByFloorID = useSelector((state: any) => state.userListByFloorID)
  const [userListFloor, setUserListFloor] = useState()
  const [isLoading, setIsLoading] = useState(false)
  console.log('%cMyProject%cline:42%cisLoading', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', isLoading)
  const dispatch = useDispatch()
  // const buildingID = allData.currentBuilding


  const getAllBuildings = async (token: any) => {
    setIsLoading(true)
    const allDataBuildings = await fetchApi(`https://api.airin1.com/api/buildings`, token)
    dispatch(keepData(allDataBuildings))
    setIsLoading(false)
  }

  const checkTokenExpires = async (token: any) => {
    const exp: any = await checkTokenExp(token)
    return exp
  }
  useEffect(() => {
    const token: any = getFromStorage("token")
    const buildingID = localStorage.getItem("currentBuildingID")
    checkTokenExpires(token)

    if (token) {
      console.log("re-rendering");

      getAllBuildings(token)
      setUserToken(token)
      setCurrentBuildingID(buildingID)
      dispatch(buildingAsync(buildingID))
      dispatch(buildingListAsync(buildingID))
      dispatch(getUserListByFloorID({
        buildingID: buildingID,
        floorID: allData.floorID
      }))
      if (buildings && buildingsList) {
        setBuildingData(buildings.data)
        setBuildingDataList(buildingsList.data)
        setUserListFloor(userListByFloorID)
      }
    } else {
      router.push("/signin")
    }
  }, [buildingDataList, buildingData, allData.currentBuilding, allData.floorID],)

  return (
    <div>
      <Head>
        <title>Bruno</title>
        <meta name="description" content="Bruno app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {currentBuildingID ? (
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
          ) : <Loading />}

          {!isLoading ?
            (
              <>
                {buildingsList.data ? (
                  <div>
                    {allData.floorID > 0 ? (
                      <UserList data={userListByFloorID.data} typeUser={true} />
                    ) : (
                      <UserList data={buildingsList.data} typeUser={false} />
                    )}
                  </div>
                ) : null}
                </>
            )
            : (
              <Loading />
            )}
        </>
      ) : (
        <SelectBuilding />
      )}
    </div>
  );
};


export default Home;

