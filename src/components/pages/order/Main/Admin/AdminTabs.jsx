import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import OrderContext from "../../../../../Context/OrderContext";

// import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";

import { useContext } from "react";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(
    currentTabSelected,
    isCollapsed,
    setIsCollapsed,
    selectTab,
  );

  return (
    <AdminTabsStyled>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            icon={tab.icon}
            label={tab.label}
            onclick={tab.onClick}
            className={tab.className}
            // className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 1px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
  button {
    margin-left: 1px;
  }
  .add-product:focus {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
