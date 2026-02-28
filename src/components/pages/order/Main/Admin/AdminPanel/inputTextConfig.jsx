import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const GetInputTextsConfig = (newProduct) => [
  {
    id: "1",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: newProduct.title,
    type: "text",
    icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "2",
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: newProduct.imageSource,
    type: "text",
    icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "3",
    name: "price",
    placeholder: "Price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    icon: <MdOutlineEuro />,
    version: "minimalist",
  },
];
