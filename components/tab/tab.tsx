import React, { useEffect, useState } from "react";
import TabNavItem from "./tabNavItem";
import TabContent from "./tabContent";
import Calculator from "../calculate/calculator";
import styles from '../../styles/tab/navTab.module.scss'
import { tabContentData } from '../../data/tabContent'
import CalculatorDay from "../calculate/calculatorDay";
import CalculatorMonth from "../calculate/calculatorMonth";
import CalculatorYear from "../calculate/calculatorYear";
import CalculatorItem from "../calculate/calculatorItem";
import { fetchApi } from "../../utills/fecthApi";
import { getFromStorage } from "../../utills";
import Loading from "../loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { keepAddress, keepDataPdf, keepEndDate, keepStartDate } from "../../redux/slice/pdfSlice";
import { useRouter } from "next/router";



const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [summary, setSummary] = useState()
  const [calSingle, setCalSingle] = useState()
  const [statusCallApi, setStatusCallApi] = useState(false)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [startItem, setStartItem] = useState()
  console.log('%cMyProject%cline:27%cstartItem', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(39, 72, 98);padding:3px;border-radius:2px', startItem)
  const [endItem, setEndItem] = useState()
  const ownerData = useSelector((state: any) => state.building)
  const dispatch = useDispatch()
  const router = useRouter()
  const getData = async (token: any) => {
    setStatusCallApi(true)
    const dataUnits: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}/tenants/1/electricity_bill/range?start_date=${startDate}&end_date=${endDate}`, token)
    const dataSingle: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}/tenants/1/electricity_bill/device?start_date=${startItem}&end_date=${endItem}`, token)
    if (dataUnits) {
      console.log('%cMyProject%cline:36%cdataSingle', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(222, 125, 44);padding:3px;border-radius:2px', dataSingle)
      const { summary } = dataUnits
      setSummary(dataUnits.summary)
      setStatusCallApi(false)
      dispatch(keepDataPdf(summary))
      dispatch(keepStartDate(startDate))
      dispatch(keepEndDate(endDate))

    } else if (dataSingle) {
      setCalSingle(dataSingle.summary)
      setStatusCallApi(false)
    } else {
      setSummary()
      setCalSingle()
      setStatusCallApi(false)

    }

  }

  useEffect(() => {
    const token = getFromStorage("token")
    if (token && ownerData.data) {
      getData(token)
      dispatch(keepAddress(ownerData.data.address))
    } else {
      router.push('/')

    }
  }, [startDate, endDate, startItem, endItem])
  console.log('%cMyProject%cline:23%ccalSingle', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(217, 104, 49);padding:3px;border-radius:2px', calSingle)


  return (
    <div >
      <ul className={styles.nav}>
        <TabNavItem
          title="คิดค่าไฟแบบรายวัน"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="คิดค่าไฟแบบรายเดือน"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="คิดค่าไฟแบบรายปี"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="คิดค่าไฟแอร์รายตัว"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div >
        <>
          <TabContent id="tab1" activeTab={activeTab}>
            <CalculatorDay
              title="คิดค่าไฟแบบรายวัน"
              slug="day"
              data={summary}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              statusCallApi={statusCallApi}
            />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <CalculatorMonth
              title="คิดค่าไฟแบบรายเดือน"
              slug="month"
              data={summary}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              statusCallApi={statusCallApi}
            />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <CalculatorYear
              title="คิดค่าไฟแบบรายปี"
              slug="year"
              data={summary}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              statusCallApi={statusCallApi}
            />
          </TabContent>
          <TabContent id="tab4" activeTab={activeTab}>
            <CalculatorItem
              title="คิดค่าไฟแอร์รายตัว"
              slug="single"
              data={calSingle}
              setStartItem={setStartItem}
              setEndItem={setEndItem}
              statusCallApi={statusCallApi}
            />
          </TabContent>
        </>

      </div>
    </div>
  );
};

export default Tabs;
