import React from "react";
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
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};
export default TabNavItem;