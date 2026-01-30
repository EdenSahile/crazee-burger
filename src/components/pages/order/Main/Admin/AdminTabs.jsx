import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
// import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "is-active" : ""}
        onClick={() => setIsCollapsed((prev) => !prev)}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
