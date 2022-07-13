import React, { useEffect, useState } from "react";
import styles from "../../styles/layout/menu.module.scss";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { currentBuilding, keepData, currentFloorID } from "../../redux/slice/allBuildingsSlice"
import { setLocalStorage, getFromStorage } from "../../utills";
import { fetchApi } from "../../utills/fecthApi";
import { buildingListAsync } from "../../redux/slice/buildingListSlice";
import { RiArrowDownSLine } from 'react-icons/ri'
import { useRouter } from "next/router";
import { RiShutDownLine } from 'react-icons/ri'
interface AllBuildings {
  data: [];
}
const Menu = () => {
  const [dataUser, setDataUser] = useState([])
  const { data, status } = useSelector((state: any) => state.buildingList)
  const [foundData, setFoundData] = useState([])
  const [allBuildings, setAllBuildings] = useState<Array<AllBuildings>>([
  ])
  
  const [currentBuildingID, setCurrentBuildingID] = useState()
  const [activeFool, setActiveFool] = useState()
  const [toggleSelectFool, setToggleSelectFool] = useState(false)
  const allData = useSelector((state: any) => state.allBuildings)
  const buildingsList = useSelector((state: any) => state.buildingList)
  const router = useRouter()
  const buildings = useSelector((state: any) => state.building)

  const dispatch = useDispatch()



  const searchData = async (e: any) => {
    let text = e.target.value
    const result = await dataUser.filter((_item: any) => _item.name.toLowerCase().includes(text));
    if (result.length > 0 && text !== "") {
      setFoundData(result)
    } else if (text == "") {
      setFoundData([])
    }
  }

  const onChangeBuilding = (e: any) => {
    const buildingID = e.target.value
    dispatch(currentBuilding(Number(buildingID)))
    setLocalStorage("currentBuildingID", buildingID)
    router.push('/')
  }
  const getAllBuildings = async (token: any) => {
    const allDataBuildings = await fetchApi(`https://api.airin1.com/api/buildings`, token)
    dispatch(keepData(allDataBuildings))
    setAllBuildings(allDataBuildings)
  }

  const activeLink = (name: any, id:any) => {
    if (name && id) {
      setActiveFool(name)
      setToggleSelectFool(false)
      dispatch(currentFloorID(Number(id)))
    }
  }
  const logout = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("currentBuildingID")
    window.location.reload()
  }
  const onToggleSelectFool = () => {
    setToggleSelectFool(!toggleSelectFool)
  }

  useEffect(() => {
    const currentBuilding = getFromStorage("currentBuildingID")

    const token: any = getFromStorage("token")
    getAllBuildings(token)
    if (status || currentBuilding) {
      setDataUser(data)
      setCurrentBuildingID(Number(currentBuilding))
      dispatch(buildingListAsync(currentBuilding))
    }
  }, [status, currentBuildingID, currentBuilding])


  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <select className={`${styles.menuSelector}  text-xs`} onChange={(e: any) => onChangeBuilding(e)}>
            {allBuildings && allBuildings.length > 0 ?
              allBuildings.map((item: any, key: any) => (
                <option key={key} value={item.id} defaultValue={currentBuildingID ? currentBuildingID : 0} selected={item.id == currentBuildingID ? true : false}>
                  {item.name}
                </option>
              )) : null}
          </select>
        </li>

        <li >
          {/* <div className={`${styles.menuSelector} text-xs relative border`}> */}
          <div className={`text-xs relative min-w[80px] w-[100px] max-w[60px] flex items-center h-full`}>
            <div className="cursor-pointer" onClick={onToggleSelectFool}>
              {activeFool ? activeFool : 'กรุณาเลือกชั้น'}
              <span className="absolute right-0 top-[5px]" >
                <RiArrowDownSLine size="15" />
              </span>
            </div>
            {buildings.data && toggleSelectFool ? (
              <div className={`absolute border border-gray-600 top-10 bg-black rounded-lg p-2`}>
                <div className={`flex-col flex gap-2 w-[120px]`}>
                  {buildings?.data.children.map((item: any, key: any) => (
                    <div className={`cursor-pointer`}>
                        <div onClick={() => activeLink(item.name, item.id)}>
                          {item.name}
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </li>

        <li className={`${styles.li_inputSearch} relative`} >
          <img src="/svg/search.svg" alt="" width={20} />
          <input type="text" onChange={(e) => searchData(e)} className={styles.inputSearch} placeholder="ค้นหาชั้น,ผู้เช่า" />
          {foundData.length > 0 ? (
            <div className="absolute top-12 bg-black w-full rounded-md px-3 py-2 z-10 border border-[#6d6d6d] md:w-[350px] lg:w-[480px] lg:overflow-hidden">
              {foundData.map((item: any, key) => (
                <a href={`/user/${key + 1}`} key={key} className="text-xs flex gap-2 my-2 bg-[#383838] p-2 rounded-sm justify-center lg:justify-start">
                  <div >
                    <span className="text-[#c6c6c6]">
                      ซื้อ :
                    </span>
                    {item.name}
                  </div>
                  <div>
                    <span className="text-[#c6c6c6]">
                      ชั้น :
                    </span>
                    {item.floor_id}
                  </div>
                  <div>
                    <span className="text-[#c6c6c6]">
                      เบอร์โทร :
                    </span>
                    {item.mobile_number}
                  </div>
                  <div className="hidden lg:inline">
                    <span className="text-[#c6c6c6]">
                      Line :
                    </span>
                    {item.line_id}
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </li>

      </ul>


      <div className={styles.logo}>
        <a href="/">
          <h1>BRUNO</h1>
        </a>
      </div>


      <ul className={styles.menuRigth}>

        <li>
          <Link href="/login">
            <div className={styles.menuItem}>
              <img src="/svg/user.svg" alt="" width={20} />
              <p>Owner Information</p>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/setting">
            <div className={styles.menuItem}>
              <img src="/svg/gear.svg" alt="" width={20} />
              <p>Unit Price Setting </p>
            </div>
          </Link>
        </li>
        <li>
          <div className={styles.menuItem}
            onClick={logout}
          >
            <RiShutDownLine
              color="#ffffff"
              size={30}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
