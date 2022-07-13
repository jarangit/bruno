import React, { useEffect, useMemo, useState } from "react";
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
  const [endItem, setEndItem] = useState()
  const [buildingDate, setBuildingDate] = useState("")
  const [isToken, setIsToken] = useState("")
  const ownerData = useSelector((state: any) => state.building)
  const dispatch = useDispatch()
  const router = useRouter()


  const getData = async (token: any) => {
    setStatusCallApi(true)
    const tenantID = router.query.id
    const dataUnits: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants/${tenantID}/electricity_bill/range?start_date=${startDate}&end_date=${endDate}`, token)
    const dataSingle: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants/${tenantID}/electricity_bill/device?start_date=${startItem}&end_date=${endItem}`, token)
    if (dataUnits) {
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

  const onShowAll = async () => {
    setStatusCallApi(true)
    const tenantID = router.query.id
    const startDate: any = buildingDate.slice(0, 10)
    const now = new Date()
    const endDate: any = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    if (startDate) {
      const dataUnits: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants/${tenantID}/electricity_bill/range?start_date=${startDate}&end_date=${endDate}`, isToken)
      // const dataSingle: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants/${tenantID}/electricity_bill/device?start_date=${startDate}&end_date=${endDate}`, isToken)

      // if (dataSingle) {
      //   setCalSingle(dataSingle.summary)
      //   dispatch(keepStartDate(startDate))
      //   dispatch(keepEndDate(endDate))
      // }
      setSummary(dataUnits.summary)
      setStatusCallApi(false)
      dispatch(keepDataPdf(dataUnits.summary))
      dispatch(keepStartDate(startDate))
      dispatch(keepEndDate(endDate))
    }
  }

  const onShowAllSingle = async () => {
    console.log("get single");
    setStatusCallApi(true)
    const tenantID = router.query.id
    const startDate: any = buildingDate.slice(0, 10)
    const now = new Date()
    const endDate: any = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    if (startDate) {
      const dataSingle: any = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}tenants/${tenantID}/electricity_bill/device?start_date=${startDate}&end_date=${endDate}`, isToken)
      if (dataSingle) {
        setCalSingle(dataSingle.summary)
        dispatch(keepDataPdf(dataSingle.summary))
        dispatch(keepStartDate(startDate))
        dispatch(keepEndDate(endDate))
      }
    }
  }

  const onClear = () => {
    setSummary()
    setCalSingle()
  }
  useMemo(() => {
    console.log("clear data");

    setSummary()
  }, [activeTab])

  useEffect(() => {
    const token = getFromStorage("token")
    if (token && ownerData.data) {
      getData(token)
      onShowAll()
      setIsToken(token)
      dispatch(keepAddress(ownerData.data.address))
      setBuildingDate(ownerData.data.created_at)
    } else {
      router.push('/')
    }
    console.log("re render");

  }, [startDate, endDate, startItem, endItem])


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
              onShowAll={onShowAll}
              onShow={getData}
              onClear={onClear}
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
              onShowAll={onShowAll}
              onShow={getData}
              onClear={onClear}
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
              onShowAll={onShowAll}
              onShow={getData}
              onClear={onClear}
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
              onShowAll={onShowAllSingle}
              onShow={getData}
              onClear={onClear}
            />
          </TabContent>
        </>

      </div>
    </div>
  );
};

export default Tabs;
