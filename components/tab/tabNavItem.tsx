import React from "react";
import styles from '../../styles/tab/navTab.module.scss'

type Props = {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const TabNavItem = ({ id, title, activeTab, setActiveTab }: Props) => {

  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? styles.tabOn : ""}>
      {title}
    </li>
  );
};
export default TabNavItem;