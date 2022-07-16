import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/layout/menu.module.scss";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { currentBuilding, keepData, currentFloorID, currentRoomID } from "../../redux/slice/allBuildingsSlice"
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
  const [activeFool, setActiveFool] = useState("")
  const [activeBuilder, setActiveBuilder] = useState("")
  const [toggleSelectFool, setToggleSelectFool] = useState(false)
  const [toggleSelectBuilder, setToggleSelectBuilder] = useState(false)
  const allData = useSelector((state: any) => state.allBuildings)
  const buildingsList = useSelector((state: any) => state.buildingList)
  const router = useRouter()
  const buildings = useSelector((state: any) => state.building)
  const [twoLevel, setTwoLevel] = useState(false)
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

  const onChangeBuilding = (id: any, name: any) => {
    const buildingID = id
    dispatch(currentBuilding(Number(buildingID)))
    dispatch(currentFloorID(0))
    setLocalStorage("currentBuildingID", buildingID)
    setActiveFool("")
    setActiveBuilder(name)
    router.push('/')
  }
  const getAllBuildings = async (token: any) => {
    const allDataBuildings = await fetchApi(`https://api.airin1.com/api/buildings`, token)
    dispatch(keepData(allDataBuildings))
    setAllBuildings(allDataBuildings)
  }

  const activeLink = (name: any, id: any) => {
    if (name && id && buildings.data.is_two_level) {
      console.log(buildings.data.is_two_level)
      setActiveFool(name)
      setToggleSelectFool(false)
      dispatch(currentRoomID(Number(id)))
      dispatch(currentFloorID(0))

    } else {
      setActiveFool(name)
      setToggleSelectFool(false)
      dispatch(currentFloorID(Number(id)))
      dispatch(currentRoomID(0))
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

  const setDefaultActiveBuilders = (id: number) => {
    const found: any = allBuildings.find((build: any) => build.id === id);
    if (found) {
      setActiveBuilder(found.name)
    }
  }
  useEffect(() => {
    const currentBuilding: any = getFromStorage("currentBuildingID")

    const token: any = getFromStorage("token")
    getAllBuildings(token)
    if (status || currentBuilding && buildings) {
      setDataUser(data)
      setCurrentBuildingID(Number(currentBuilding))
      dispatch(buildingListAsync(currentBuilding))
      // setTwoLevel(buildings.data.is_two_level)
      setDefaultActiveBuilders(Number(currentBuilding))
    }
  }, [status, currentBuildingID, currentBuilding, activeBuilder])

  const styled = useMemo(() => ({
    menuItem: `
    
    `,
  }), [])
  return (
    // <div className={styles.menu}>
    //   <ul>
    //     <li>
    //       <select className={`${styles.menuSelector}  text-xs`} onChange={(e: any) => onChangeBuilding(e)}>
    //         {allBuildings && allBuildings.length > 0 ?
    //           allBuildings.map((item: any, key: any) => (
    //             <option key={key} value={item.id} defaultValue={currentBuildingID ? currentBuildingID : 0} selected={item.id == currentBuildingID ? true : false}>
    //               {item.name}
    //             </option>
    //           )) : null}
    //       </select>
    //     </li>

    //     <li >
    //       {/* <div className={`${styles.menuSelector} text-xs relative border`}> */}
    //       <div className={`text-xs relative min-w[80px] w-[100px] max-w[60px] flex items-center h-full`}>
    //         <div className="cursor-pointer" onClick={onToggleSelectFool}>
    //           {activeFool ? activeFool : 'กรุณาเลือกชั้น'}
    //           <span className="absolute right-0 top-[5px]" >
    //             <RiArrowDownSLine size="15" />
    //           </span>
    //         </div>
    //         {buildings.data && toggleSelectFool ? (
    //           <div className={`absolute border border-gray-600 top-10 bg-black rounded-lg p-2`}>
    //             <div className={`flex-col flex gap-2 w-[120px]`}>
    //               <div onClick={() => activeLink('', 0)}>
    //                 เลือกทั้งหมด
    //               </div>
    //               {buildings?.data.children.map((item: any, key: any) => (
    //                 <div className={`cursor-pointer`}>
    //                   <div onClick={() => activeLink(item.name, item.id)}>
    //                     {item.name}
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         ) : null}
    //       </div>
    //     </li>

    //     <li className={`${styles.li_inputSearch} relative`} >
    //       <img src="/svg/search.svg" alt="" width={20} />
    //       <input type="text" onChange={(e) => searchData(e)} className={styles.inputSearch} placeholder="ค้นหาชั้น,ผู้เช่า" />
    //       {foundData.length > 0 ? (
    //         <div className="absolute top-12 bg-black w-full rounded-md px-3 py-2 z-10 border border-[#6d6d6d] md:w-[350px] lg:w-[480px] lg:overflow-hidden">
    //           {foundData.map((item: any, key) => (
    //             <a href={`/user/${key + 1}`} key={key} className="text-xs flex gap-2 my-2 bg-[#383838] p-2 rounded-sm justify-center lg:justify-start">
    //               <div >
    //                 <span className="text-[#c6c6c6]">
    //                   ซื้อ :
    //                 </span>
    //                 {item.name}
    //               </div>
    //               <div>
    //                 <span className="text-[#c6c6c6]">
    //                   ชั้น :
    //                 </span>
    //                 {item.floor_id}
    //               </div>
    //               <div>
    //                 <span className="text-[#c6c6c6]">
    //                   เบอร์โทร :
    //                 </span>
    //                 {item.mobile_number}
    //               </div>
    //               <div className="hidden lg:inline">
    //                 <span className="text-[#c6c6c6]">
    //                   Line :
    //                 </span>
    //                 {item.line_id}
    //               </div>
    //             </a>
    //           ))}
    //         </div>
    //       ) : null}
    //     </li>

    //   </ul>


    //   <div className={styles.logo}>
    //     <a href="/">
    //       <h1>BRUNO</h1>
    //     </a>
    //   </div>


    //   <ul className={styles.menuRigth}>

    //     <li>
    //       <Link href="/login">
    //         <div className={styles.menuItem}>
    //           <img src="/svg/user.svg" alt="" width={20} />
    //           <p>Owner Information</p>
    //         </div>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link href="/setting">
    //         <div className={styles.menuItem}>
    //           <img src="/svg/gear.svg" alt="" width={20} />
    //           <p>Unit Price Setting </p>
    //         </div>
    //       </Link>
    //     </li>
    //     <li>
    //       <div className={styles.menuItem}
    //         onClick={logout}
    //       >
    //         <RiShutDownLine
    //           color="#ffffff"
    //           size={30}
    //         />
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <>
      <div >
        <a href="/" className="text-3xl text-center my-1 lg:hidden font-bold">
          <div>BRUNO</div>
        </a>
      </div>
      <div className="px-3 mb-6 lg:mb-1 mx-auto grid grid-cols-4 lg:grid-cols-9 gap-6 justify-center items-center max-w-[1200px]">
        <ul className=" flex col-span-3 lg:col-span-4 gap-5 ">
          <li className={`h-[30px]`}>
            <div
              className={`text-xs relative min-w[80px] w-[120px]  flex items-center h-full px-3 rounded-full bg-black cursor-pointer`}
              // onChange={(e: any) => onChangeBuilding(e)}
              onClick={() => setToggleSelectBuilder(!toggleSelectBuilder)}
            >
              <div className={`truncate w-[90px] `}>
                {activeBuilder ? activeBuilder : 'กรุณาเลือกอาคาร'}
              </div>
              <div className="absolute right-2 top-2"  >
                <RiArrowDownSLine size="15" />
              </div>
              {toggleSelectBuilder && allBuildings && allBuildings.length > 0 &&
                <div className={`z-10 absolute border border-gray-600 top-10 bg-black rounded-lg p-2 `}>
                  <div className={`flex-col flex gap-2  w-[350px]`}>
                    {allBuildings.map((item: any, key: number) => (
                      <div onClick={() => onChangeBuilding(item.id, item.name)}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              }
              {/* {allBuildings && allBuildings.length > 0 ?
              allBuildings.map((item: any, key: any) => (
                <option key={key} value={item.id} defaultValue={currentBuildingID ? currentBuildingID : 0} selected={item.id == currentBuildingID ? true : false}>
                  {item.name}
                </option>
              )) : null} */}
            </div>
          </li>

          <li className={`h-[30px]`}>
            {/* <div className={`${styles.menuSelector} text-xs relative border`}> */}
            <div className={` text-xs relative min-w[80px] w-[120px]  flex items-center h-full px-3 rounded-full bg-black cursor-pointer`} onClick={onToggleSelectFool}>
              <div className={`truncate w-[90px] `} onClick={onToggleSelectFool}>
                {activeFool ? activeFool : 'กรุณาเลือกชั้น'}
              </div>
              <div className="absolute right-2 top-2"  >
                <RiArrowDownSLine size="15" />
              </div>
              {buildings.data && toggleSelectFool ? (
                <div className={`absolute border border-gray-600 top-10 bg-black rounded-lg p-2 `}>
                  <div className={`flex-col flex gap-2  w-[140px]`}>
                    <div onClick={() => activeLink('', 0)}>
                      เลือกทั้งหมด
                    </div>
                    {buildings?.data.children.map((item: any, key: any) => (
                      <div className={`cursor-pointer`}>
                        <div onClick={() => activeLink(item.name, item.id)} >
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </li>

          <li className={`flex relative bg-[#808080] rounded-full h-[30px] px-2 gap-1 w-full`} >
            <img src="/svg/search.svg" alt="" width={15} />
            <input
              type="text"
              onChange={(e) => searchData(e)}
              className={`bg-[#808080] text-xs lg:w-[80%] w-3/4`}
              placeholder="ค้นหาชั้น,ผู้เช่า"
            />
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


        <div className="font-bold text-center col-span-1 text-3xl hidden lg:inline-block">
          <a href="/">
            <div>BRUNO</div>
          </a>
        </div>


        <ul className={`col-span-1 lg:col-span-4 flex gap-5 justify-end `}>

          <li className=" lg:w-full">
            <Link href="/login">
              <div className="bg-black flex gap-2 w-full px-3 h-[30px] items-center rounded-full cursor-pointer text-xs">
                <img src="/svg/user.svg" alt="" width={15} />
                <div className="hidden lg:inline-block">Owner Information</div>
              </div>
            </Link>
          </li>

          <li className=" lg:w-full">
            <Link href="/setting">
              <div className="bg-black flex gap-2 w-full px-3 h-[30px] items-center rounded-full cursor-pointer text-xs">
                <img src="/svg/gear.svg" alt="" width={15} />
                <div className="hidden lg:inline-block">Unit Price Setting </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="bg-black flex gap-2 p-1 h-[30px] items-center rounded-full w-[30px] cursor-pointer"
              onClick={logout}
            >
              <RiShutDownLine
                color="#ffffff"
                size={25}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
