import { IonIcon } from "@ionic/react";
import React, { useRef } from "react";

import MenuIcon from "../../assets/icons/menu.svg";
import SideMenu from "../side-menu";

import "./MainNavbar.css";

const MainNavbar: React.FC = () => {
  const sideMenuRef = useRef<HTMLIonMenuElement>(null);

  const toggleSidebar = async () => {
    await sideMenuRef.current?.toggle();
  };

  return (
    <>
      <SideMenu ref={sideMenuRef}></SideMenu>
      <div className="main-navbar">
        <div className="user-image"></div>

        <IonIcon icon={MenuIcon} size="large" onClick={() => toggleSidebar()}></IonIcon>
      </div>
    </>
  );
};

export default MainNavbar;
