import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => { 

  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  //comportement
  const handleAdd = (newProduct) => {
    //copie state
    const menuCopy = deepClone(menu);
    //manipulation de la copie du tableau
    const menuUpdate = [newProduct, ...menuCopy];
    //Update du state
    setMenu(menuUpdate);
  };

  const handleDelete = (id) => {
    const menuCopy = deepClone(menu);
    const menuFiltered = menuCopy.filter((m) => {
      return m.id !== id;
    });

    setMenu(menuFiltered);
  };

  const handleEdit = (productBeingEdited) => {
    console.log("productBeingEdited : ", productBeingEdited);

    //1 - copie state (Deep Clone)

    const menuCopy = deepClone(menu);

    //2 - manipulation
    const indexOfProductToEdit = menu.findIndex(
      (menuproduct) => menuproduct.id === productBeingEdited.id,
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //3 - update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return {menu,setMenu,handleAdd,handleDelete,handleEdit,resetMenu}

  
 } 