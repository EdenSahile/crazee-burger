import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";

export const getTabsConfig = () => [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    content: <AddForm />,
  },
  {
    index: "edit",
    icon: <MdModeEditOutline />,
    content: <EditForm />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
