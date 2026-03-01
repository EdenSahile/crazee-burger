import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig = () => [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    content: <AddForm />,
    label: "Ajouter un produit",
  },
  {
    index: "edit",
    icon: <MdModeEditOutline />,
    content: <EditForm />,

    label: "Modifier un produit",
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
