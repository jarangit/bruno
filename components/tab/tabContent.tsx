import React from "react";
import styles from '../../styles/tab/navTab.module.scss'


type Props = {
  id: string;
  activeTab: string;
  children: JSX.Element;
}
const TabContent = ({ id, activeTab, children }: Props) => {  
  return activeTab === id ? <div className={styles.tabContent}>{children}</div> : null;
};

export default TabContent;
