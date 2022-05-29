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
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [summary, setSummary] = useState()
  const [calSingle, setCalSingle] = useState()
  const [statusCallApi, setStatusCallApi] = useState(false)
  const getData = async (token: any) => {

    const data = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}/tenants/1/electricity_bill/range?start_date=2021-12-10&end_date=2021-12-11`, token)
    const dataSingle = await fetchApi(`${process.env.NEXT_PUBLIC_APP_URL_CACHE}/tenants/1/electricity_bill/device?start_date=2021-12-10&end_date=2021-12-11`, token)
    if (data.summary && dataSingle.summary) {
      setSummary(data.summary)
      setCalSingle(dataSingle.summary)
      setStatusCallApi(true)
    }
  }

  useEffect(() => {
    const token = getFromStorage("token")
    if (token) {
      getData(token)
    }
  }, [])

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
        {statusCallApi ? (
          <>
            <TabContent id="tab1" activeTab={activeTab}>
              <CalculatorDay
                title="คิดค่าไฟแบบรายวัน"
                slug="day"
                data={summary} />
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <CalculatorMonth
                title="คิดค่าไฟแบบรายเดือน"
                slug="month"
                data={tabContentData}
              />
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
              <CalculatorYear
                title="คิดค่าไฟแบบรายปี"
                slug="year"
                data={tabContentData}
              />
            </TabContent>
            <TabContent id="tab4" activeTab={activeTab}>
              <CalculatorItem
                title="คิดค่าไฟแอร์รายตัว"
                slug="single"
                data={calSingle}
              />
            </TabContent>
          </>
        ) : (
          <div>
            <Loading/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
