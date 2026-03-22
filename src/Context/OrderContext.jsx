import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},

  menu: [],
  resetMenu: () => {},

  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
});
