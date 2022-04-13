import React, { useState } from "react";
import TabNavItem from "./tabNavItem";
import TabContent from "./tabContent";
import Calculator from "../calculate/calculator";
import styles from '../../styles/tab/navTab.module.scss'
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
          <Calculator />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Calculator />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Calculator />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <Calculator />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
