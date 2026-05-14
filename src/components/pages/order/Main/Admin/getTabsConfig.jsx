import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";
import { FiSettings } from "react-icons/fi";
import AdminForm from "./AdminPanel/AdminForm";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import Button from "../../../../reusable-ui/Button";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    content: <AddForm />,
    label: "Ajouter un produit",
  },
  {
    index: "edit",
    icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,

    label: "Modifier un produit",
  },
  {
    index: "manger",
    icon: <FiSettings />,
    content: <UnComposant />,
    label: "Autre onglet",
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};

export function UnComposant() {
  return (
    <AdminForm product={EMPTY_PRODUCT}>
      <div style={{ width: "20%" }}>
        <Button version="normal" label="bonjour" />
      </div>
    </AdminForm>
  );
}
