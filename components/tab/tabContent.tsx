import React from "react";
import styles from '../../styles/tab/navTab.module.scss'


type Props = {
  id: string;
  activeTab: string;
  children: JSX.Element;
}
<<<<<<< HEAD
const TabContent = ({ id, activeTab, children }: Props) => {
  
=======
const TabContent = ({ id, activeTab, children }: Props) => {  
>>>>>>> 12-c-calculateForm
  return activeTab === id ? <div className={styles.tabContent}>{children}</div> : null;
};

export default TabContent;
