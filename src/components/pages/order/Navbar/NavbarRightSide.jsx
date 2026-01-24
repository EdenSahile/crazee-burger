import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";
import ToogleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function NavbarRightSide({ username }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightStyled className="right-side">
      <ToogleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
        ischecked={isModeAdmin}
      />
      <Profile username={username} />

      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightStyled>
  );
}

const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 10px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
