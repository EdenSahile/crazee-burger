import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab icon={<FiChevronDown />} />
      {/* <Tab icon={<AiOutlinePlus />} label="Ajouter un produit" /> */}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;
