import React from "react";


type Props = {
  id: string;
  activeTab: string;
  children: JSX.Element;
}
const TabContent = ({ id, activeTab, children }: Props) => {
  console.log("re-render content");
  
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
};

export default TabContent;
