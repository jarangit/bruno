import React, { useEffect, useState } from "react";
import styles from "../../styles/layout/menu.module.scss";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { currentBuilding } from "../../redux/slice/allBuildingsSlice"
import { setLocalStorage, getFromStorage } from "../../utills";
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
  const allData = useSelector((state: any) => state.allBuildings)
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
    setLocalStorage("currentBuildingID",buildingID)

  }

  useEffect(() => {
    const currentBuilding = getFromStorage("currentBuildingID")
    console.log(currentBuilding);
    
    if (status && currentBuilding ) {
      setDataUser(data)
      setAllBuildings(allData.data)
      setCurrentBuildingID(currentBuilding)
    }
  }, [status])

  return (
    <div className={styles.menu}>
      <ul>

        <li>
          <select className={styles.menuSelector} onChange={(e: any) => onChangeBuilding(e)}>
            {allBuildings.length > 0 ?
              allBuildings.map((item: any, key: any) => (
                <option key={key} value={item.id} defaultValue={currentBuildingID} selected={item.id == currentBuildingID ? true : false}>
                  อาคาร: {item.id}
                </option>
              )) : null}
          </select>
        </li>

        <li>
          <select className={styles.menuSelector}>
            <option value="1">ชั้น</option>
          </select>
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
        <Link href="/">
          <a>
            <h1>BRUNO</h1>
          </a>
        </Link>
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

      </ul>
    </div>
  );
};

export default Menu;
