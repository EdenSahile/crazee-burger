import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const getTabsConfig = (
  currentTabSelected,
  isCollapsed,
  setIsCollapsed,
  selectTab,
) => [
  {
    index: "chevronUpDown",
    icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    label: "",
    onClick: () => setIsCollapsed((prev) => !prev),
    className: isCollapsed ? "is-active" : "",
  },
  {
    index: "add",
    icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    onClick: () => selectTab("add"),
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    onClick: () => selectTab("edit"),
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
