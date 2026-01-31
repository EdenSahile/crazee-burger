import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../Context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setIsAddSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    if (tabSelected === "add") {
      setIsCollapsed(false);
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsCollapsed(false);
      setIsAddSelected(false);
      setIsEditSelected(true);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={() => setIsCollapsed((prev) => !prev)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        icon={<AiOutlinePlus />}
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
      />

      <Tab
        label="Modifier un produit"
        icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
      />
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
