import React, { useState } from "react";
import TabNavItem from "./tabNavItem";
import TabContent from "./tabContent";
import Calculator from "../calculate/calculator";
import styles from '../../styles/tab/navTab.module.scss'
import { tabContentData } from '../../data/tabContent'
import CalculatorDay from "../calculate/calculatorDay";
import CalculatorMonth from "../calculate/calculatorMonth";
import CalculatorYear from "../calculate/calculatorYear";
import CalculatorItem from "../calculate/calculatorItem";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
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

        <TabContent id="tab1" activeTab={activeTab}>
          <CalculatorDay
            title="คิดค่าไฟแบบรายวัน"
            slug="day"
            data={tabContentData} />
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
            data={tabContentData}
          />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
